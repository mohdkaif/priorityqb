import { promises as fs } from 'fs';
import path from 'path';
import { randomUUID } from 'crypto';

export type Lead = {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  createdAt: string;
  source?: string;
};

type LeadsIndex = {
  version: 1;
  leadsPerFile: number;
  totalLeads: number;
  currentFile: number;
  files: string[];
};

const DATA_DIR = path.join(process.cwd(), 'data', 'leads');
const INDEX_FILE = path.join(DATA_DIR, 'index.json');
const LEADS_PER_FILE = 100;

async function ensureDir() {
  await fs.mkdir(DATA_DIR, { recursive: true });
}

function shardName(n: number) {
  return `leads-${String(n).padStart(4, '0')}.json`;
}

async function readIndex(): Promise<LeadsIndex> {
  await ensureDir();
  try {
    const raw = await fs.readFile(INDEX_FILE, 'utf8');
    return JSON.parse(raw) as LeadsIndex;
  } catch {
    const index: LeadsIndex = {
      version: 1,
      leadsPerFile: LEADS_PER_FILE,
      totalLeads: 0,
      currentFile: 1,
      files: [shardName(1)],
    };
    await writeIndex(index);
    const first = path.join(DATA_DIR, shardName(1));
    try {
      await fs.access(first);
    } catch {
      await fs.writeFile(first, '[]\n', 'utf8');
    }
    return index;
  }
}

async function writeIndex(index: LeadsIndex) {
  await ensureDir();
  await fs.writeFile(INDEX_FILE, JSON.stringify(index, null, 2) + '\n', 'utf8');
}

async function readShard(fileName: string): Promise<Lead[]> {
  const filePath = path.join(DATA_DIR, fileName);
  try {
    const raw = await fs.readFile(filePath, 'utf8');
    const data = JSON.parse(raw);
    return Array.isArray(data) ? (data as Lead[]) : [];
  } catch {
    return [];
  }
}

async function writeShard(fileName: string, leads: Lead[]) {
  await ensureDir();
  await fs.writeFile(
    path.join(DATA_DIR, fileName),
    JSON.stringify(leads, null, 2) + '\n',
    'utf8'
  );
}

/** Append a lead; rotates to a new JSON file when the current shard is full. */
export async function saveLead(
  input: Omit<Lead, 'id' | 'createdAt'> & { source?: string }
): Promise<Lead> {
  const index = await readIndex();
  const fileName = shardName(index.currentFile);
  let leads = await readShard(fileName);

  if (leads.length >= index.leadsPerFile) {
    index.currentFile += 1;
    const nextName = shardName(index.currentFile);
    if (!index.files.includes(nextName)) {
      index.files.push(nextName);
    }
    leads = [];
    await writeShard(nextName, leads);
  }

  const lead: Lead = {
    id: randomUUID(),
    name: input.name.trim(),
    email: input.email.trim(),
    phone: input.phone.trim(),
    message: input.message.trim(),
    createdAt: new Date().toISOString(),
    source: input.source || 'contact',
  };

  const activeFile = shardName(index.currentFile);
  const activeLeads = await readShard(activeFile);
  activeLeads.push(lead);
  await writeShard(activeFile, activeLeads);

  index.totalLeads += 1;
  if (!index.files.includes(activeFile)) {
    index.files.push(activeFile);
  }
  await writeIndex(index);

  return lead;
}

export type LeadsPage = {
  leads: Lead[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
};

export type LeadFilters = {
  q?: string;
  source?: string;
  dateFrom?: string;
  dateTo?: string;
};

function matchesFilters(lead: Lead, filters: LeadFilters): boolean {
  const q = filters.q?.trim().toLowerCase();
  if (q) {
    const hay = `${lead.name} ${lead.email} ${lead.phone} ${lead.message}`.toLowerCase();
    if (!hay.includes(q)) return false;
  }

  if (filters.source && filters.source !== 'all') {
    const src = (lead.source || 'contact').toLowerCase();
    if (src !== filters.source.toLowerCase()) return false;
  }

  if (filters.dateFrom) {
    const from = new Date(filters.dateFrom);
    if (!Number.isNaN(from.getTime())) {
      from.setHours(0, 0, 0, 0);
      if (new Date(lead.createdAt) < from) return false;
    }
  }

  if (filters.dateTo) {
    const to = new Date(filters.dateTo);
    if (!Number.isNaN(to.getTime())) {
      to.setHours(23, 59, 59, 999);
      if (new Date(lead.createdAt) > to) return false;
    }
  }

  return true;
}

/**
 * Newest-first pagination across shard files.
 * Optional filters are applied while scanning so we don't load everything into memory first.
 */
export async function getLeadsPage(
  page = 1,
  pageSize = 20,
  filters: LeadFilters = {}
): Promise<LeadsPage> {
  const index = await readIndex();
  const filesNewestFirst = [...index.files].reverse();

  const hasFilters = Boolean(
    filters.q?.trim() ||
      (filters.source && filters.source !== 'all') ||
      filters.dateFrom ||
      filters.dateTo
  );

  // Without filters: use index total and skip efficiently
  if (!hasFilters) {
    const total = index.totalLeads;
    const totalPages = Math.max(1, Math.ceil(total / pageSize) || 1);
    const safePage = Math.min(Math.max(1, page), totalPages);
    const skip = (safePage - 1) * pageSize;
    const collected: Lead[] = [];
    let skipped = 0;

    for (const file of filesNewestFirst) {
      const shard = await readShard(file);
      const newestFirst = [...shard].reverse();
      for (const lead of newestFirst) {
        if (skipped < skip) {
          skipped += 1;
          continue;
        }
        collected.push(lead);
        if (collected.length >= pageSize) {
          return { leads: collected, total, page: safePage, pageSize, totalPages };
        }
      }
    }
    return { leads: collected, total, page: safePage, pageSize, totalPages };
  }

  // With filters: scan all shards, count matches, collect the requested page
  const matched: Lead[] = [];
  for (const file of filesNewestFirst) {
    const shard = await readShard(file);
    const newestFirst = [...shard].reverse();
    for (const lead of newestFirst) {
      if (matchesFilters(lead, filters)) {
        matched.push(lead);
      }
    }
  }

  const total = matched.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize) || 1);
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * pageSize;
  const leads = matched.slice(start, start + pageSize);

  return { leads, total, page: safePage, pageSize, totalPages };
}

export async function getLeadsStats() {
  const index = await readIndex();
  return {
    totalLeads: index.totalLeads,
    files: index.files.length,
    leadsPerFile: index.leadsPerFile,
    currentFile: shardName(index.currentFile),
  };
}

/** All matching leads (newest first), capped for export. */
export async function getFilteredLeads(
  filters: LeadFilters = {},
  limit = 5000
): Promise<Lead[]> {
  const index = await readIndex();
  const filesNewestFirst = [...index.files].reverse();
  const matched: Lead[] = [];

  for (const file of filesNewestFirst) {
    const shard = await readShard(file);
    const newestFirst = [...shard].reverse();
    for (const lead of newestFirst) {
      if (matchesFilters(lead, filters)) {
        matched.push(lead);
        if (matched.length >= limit) return matched;
      }
    }
  }

  return matched;
}
