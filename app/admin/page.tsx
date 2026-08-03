'use client';

import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './admin.module.css';

type Lead = {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  createdAt: string;
  source?: string;
};

type LeadsResponse = {
  success: boolean;
  leads: Lead[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
  stats?: { totalLeads: number; files: number; leadsPerFile: number; currentFile: string };
  user?: { email: string; name: string };
  message?: string;
};

type Filters = {
  q: string;
  source: string;
  dateFrom: string;
  dateTo: string;
};

const EMPTY_FILTERS: Filters = {
  q: '',
  source: 'all',
  dateFrom: '',
  dateTo: '',
};

function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleString(undefined, {
      dateStyle: 'medium',
      timeStyle: 'short',
    });
  } catch {
    return iso;
  }
}

export default function AdminLeadsPage() {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [data, setData] = useState<LeadsResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selected, setSelected] = useState<Lead | null>(null);
  const [filters, setFilters] = useState<Filters>(EMPTY_FILTERS);
  const [applied, setApplied] = useState<Filters>(EMPTY_FILTERS);

  const load = useCallback(
    async (p: number, f: Filters = applied) => {
      setLoading(true);
      setError('');
      try {
        const params = new URLSearchParams({
          page: String(p),
          pageSize: '20',
        });
        if (f.q.trim()) params.set('q', f.q.trim());
        if (f.source && f.source !== 'all') params.set('source', f.source);
        if (f.dateFrom) params.set('dateFrom', f.dateFrom);
        if (f.dateTo) params.set('dateTo', f.dateTo);

        const res = await fetch(`/api/admin/leads?${params.toString()}`);
        if (res.status === 401) {
          router.replace('/admin/login');
          return;
        }
        const json = (await res.json()) as LeadsResponse;
        if (!res.ok) {
          setError(json.message || 'Failed to load leads.');
          return;
        }
        setData(json);
        setPage(json.page);
      } catch {
        setError('Failed to load leads.');
      } finally {
        setLoading(false);
      }
    },
    [router, applied]
  );

  useEffect(() => {
    load(1, applied);
  }, [load, applied]);

  const applyFilters = (e: React.FormEvent) => {
    e.preventDefault();
    setApplied({ ...filters });
    setPage(1);
  };

  const clearFilters = () => {
    setFilters(EMPTY_FILTERS);
    setApplied(EMPTY_FILTERS);
    setPage(1);
  };

  const hasActiveFilters =
    Boolean(applied.q.trim()) ||
    (applied.source !== 'all' && Boolean(applied.source)) ||
    Boolean(applied.dateFrom) ||
    Boolean(applied.dateTo);

  const [exporting, setExporting] = useState<'csv' | 'pdf' | null>(null);

  const exportLeads = async (format: 'csv' | 'pdf') => {
    setExporting(format);
    setError('');
    try {
      const params = new URLSearchParams({ format });
      if (applied.q.trim()) params.set('q', applied.q.trim());
      if (applied.source && applied.source !== 'all') params.set('source', applied.source);
      if (applied.dateFrom) params.set('dateFrom', applied.dateFrom);
      if (applied.dateTo) params.set('dateTo', applied.dateTo);

      const res = await fetch(`/api/admin/leads/export?${params.toString()}`);
      if (res.status === 401) {
        router.replace('/admin/login');
        return;
      }
      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        setError((json as { message?: string }).message || 'Export failed.');
        return;
      }

      const blob = await res.blob();
      const cd = res.headers.get('Content-Disposition') || '';
      const match = cd.match(/filename="?([^"]+)"?/i);
      const filename = match?.[1] || `leads-export.${format}`;
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch {
      setError('Export failed. Please try again.');
    } finally {
      setExporting(null);
    }
  };

  const logout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.replace('/admin/login');
    router.refresh();
  };

  return (
    <div className={styles.dashboard}>
      <header className={styles.dashHeader}>
        <div>
          <h1 className={styles.dashTitle}>Leads</h1>
          <p className={styles.dashSub}>
            {data?.user ? `Signed in as ${data.user.name} (${data.user.email})` : 'Admin'}
          </p>
        </div>
        <div className={styles.headerActions}>
          <button
            type="button"
            className={styles.btnOutline}
            disabled={loading || exporting !== null || !data?.total}
            onClick={() => exportLeads('csv')}
          >
            {exporting === 'csv' ? 'Exporting…' : 'Export CSV'}
          </button>
          <button
            type="button"
            className={styles.btnOutline}
            disabled={loading || exporting !== null || !data?.total}
            onClick={() => exportLeads('pdf')}
          >
            {exporting === 'pdf' ? 'Exporting…' : 'Export PDF'}
          </button>
          <button type="button" className={styles.btnOutline} onClick={logout}>
            Log out
          </button>
        </div>
      </header>

      {data?.stats && (
        <div className={styles.stats}>
          <div className={styles.statCard}>
            <span className={styles.statLabel}>Total leads</span>
            <span className={styles.statValue}>{data.stats.totalLeads}</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statLabel}>Matching</span>
            <span className={styles.statValue}>{data.total}</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statLabel}>JSON files</span>
            <span className={styles.statValue}>{data.stats.files}</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statLabel}>Current file</span>
            <span className={styles.statValueSmall}>{data.stats.currentFile}</span>
          </div>
        </div>
      )}

      <form className={styles.filterBar} onSubmit={applyFilters}>
        <div className={styles.filterField}>
          <label htmlFor="filter-q">Search</label>
          <input
            id="filter-q"
            className={styles.input}
            type="search"
            placeholder="Name, email, phone, message…"
            value={filters.q}
            onChange={(e) => setFilters((prev) => ({ ...prev, q: e.target.value }))}
          />
        </div>
        <div className={styles.filterField}>
          <label htmlFor="filter-source">Source</label>
          <select
            id="filter-source"
            className={styles.input}
            value={filters.source}
            onChange={(e) => setFilters((prev) => ({ ...prev, source: e.target.value }))}
          >
            <option value="all">All sources</option>
            <option value="contact">Contact</option>
          </select>
        </div>
        <div className={styles.filterField}>
          <label htmlFor="filter-from">From</label>
          <input
            id="filter-from"
            className={styles.input}
            type="date"
            value={filters.dateFrom}
            onChange={(e) => setFilters((prev) => ({ ...prev, dateFrom: e.target.value }))}
          />
        </div>
        <div className={styles.filterField}>
          <label htmlFor="filter-to">To</label>
          <input
            id="filter-to"
            className={styles.input}
            type="date"
            value={filters.dateTo}
            onChange={(e) => setFilters((prev) => ({ ...prev, dateTo: e.target.value }))}
          />
        </div>
        <div className={styles.filterActions}>
          <button type="submit" className={styles.btn} disabled={loading}>
            Apply filters
          </button>
          <button
            type="button"
            className={styles.btnOutline}
            disabled={loading || !hasActiveFilters}
            onClick={clearFilters}
          >
            Clear
          </button>
        </div>
      </form>

      {hasActiveFilters && (
        <p className={styles.filterHint}>
          Showing filtered results
          {applied.q.trim() ? ` for “${applied.q.trim()}”` : ''}
          {applied.dateFrom || applied.dateTo
            ? ` · ${applied.dateFrom || '…'} → ${applied.dateTo || '…'}`
            : ''}
          {applied.source !== 'all' ? ` · source: ${applied.source}` : ''}
        </p>
      )}

      {error && <div className={styles.error}>{error}</div>}

      <div className={styles.tableWrap}>
        {loading && !data ? (
          <p className={styles.muted}>Loading leads…</p>
        ) : !data?.leads?.length ? (
          <p className={styles.muted}>
            {hasActiveFilters
              ? 'No leads match your filters.'
              : 'No leads yet. Submit the contact form to create one.'}
          </p>
        ) : (
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Date</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Source</th>
                <th>Message</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {data.leads.map((lead) => (
                <tr key={lead.id}>
                  <td data-label="Date">{formatDate(lead.createdAt)}</td>
                  <td data-label="Name">{lead.name}</td>
                  <td data-label="Email">
                    <a href={`mailto:${lead.email}`}>{lead.email}</a>
                  </td>
                  <td data-label="Phone">
                    <a href={`tel:${lead.phone}`}>{lead.phone}</a>
                  </td>
                  <td data-label="Source">{lead.source || 'contact'}</td>
                  <td data-label="Message" className={styles.msgCell}>
                    {lead.message.length > 80 ? `${lead.message.slice(0, 80)}…` : lead.message}
                  </td>
                  <td>
                    <button
                      type="button"
                      className={styles.linkBtn}
                      onClick={() => setSelected(lead)}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {data && data.totalPages > 1 && (
        <div className={styles.pagination}>
          <button
            type="button"
            className={styles.btnOutline}
            disabled={page <= 1 || loading}
            onClick={() => load(page - 1)}
          >
            Previous
          </button>
          <span className={styles.muted}>
            Page {data.page} of {data.totalPages} ({data.total} matching)
          </span>
          <button
            type="button"
            className={styles.btnOutline}
            disabled={page >= data.totalPages || loading}
            onClick={() => load(page + 1)}
          >
            Next
          </button>
        </div>
      )}

      {selected && (
        <div className={styles.modalOverlay} onClick={() => setSelected(null)} role="presentation">
          <div
            className={styles.modal}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-labelledby="lead-detail-title"
          >
            <h2 id="lead-detail-title" className={styles.modalTitle}>
              Lead details
            </h2>
            <dl className={styles.detailList}>
              <dt>Date</dt>
              <dd>{formatDate(selected.createdAt)}</dd>
              <dt>Name</dt>
              <dd>{selected.name}</dd>
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${selected.email}`}>{selected.email}</a>
              </dd>
              <dt>Phone</dt>
              <dd>
                <a href={`tel:${selected.phone}`}>{selected.phone}</a>
              </dd>
              <dt>Source</dt>
              <dd>{selected.source || 'contact'}</dd>
              <dt>Message</dt>
              <dd className={styles.detailMessage}>{selected.message}</dd>
              <dt>ID</dt>
              <dd className={styles.muted}>{selected.id}</dd>
            </dl>
            <button type="button" className={styles.btn} onClick={() => setSelected(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
