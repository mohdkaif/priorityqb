import type { Lead } from './leads';

function csvEscape(value: string) {
  const v = value.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
  if (/[",\n]/.test(v)) {
    return `"${v.replace(/"/g, '""')}"`;
  }
  return v;
}

export function leadsToCsv(leads: Lead[]): string {
  const header = ['ID', 'Date', 'Name', 'Email', 'Phone', 'Source', 'Message'];
  const rows = leads.map((lead) =>
    [
      lead.id,
      lead.createdAt,
      lead.name,
      lead.email,
      lead.phone,
      lead.source || 'contact',
      lead.message,
    ]
      .map((cell) => csvEscape(String(cell ?? '')))
      .join(',')
  );
  return [header.join(','), ...rows].join('\n') + '\n';
}

function pdfEscape(text: string) {
  return text
    .replace(/\\/g, '\\\\')
    .replace(/\(/g, '\\(')
    .replace(/\)/g, '\\)')
    // PDF WinAnsi-safe: strip characters outside Latin-1
    .replace(/[^\x20-\x7E\xA0-\xFF]/g, '?');
}

function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleString('en-GB', {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });
  } catch {
    return iso;
  }
}

/** Approximate Helvetica string width in PDF points. */
function textWidth(text: string, fontSize: number) {
  let w = 0;
  for (let i = 0; i < text.length; i++) {
    const c = text.charCodeAt(i);
    // rough widths: narrow / normal / wide
    if (c === 32) w += 0.28;
    else if ('ilI.,:;!|\'"`'.includes(text[i])) w += 0.3;
    else if ('mwMW@%'.includes(text[i])) w += 0.78;
    else w += 0.55;
  }
  return w * fontSize;
}

function wrapText(text: string, maxWidth: number, fontSize: number): string[] {
  const clean = text.replace(/\s+/g, ' ').trim() || '—';
  if (textWidth(clean, fontSize) <= maxWidth) return [clean];

  const words = clean.split(' ');
  const lines: string[] = [];
  let current = '';

  const pushChunk = (chunk: string) => {
    if (textWidth(chunk, fontSize) <= maxWidth) {
      lines.push(chunk);
      return;
    }
    // hard-break long tokens
    let buf = '';
    for (const ch of chunk) {
      const next = buf + ch;
      if (textWidth(next, fontSize) > maxWidth && buf) {
        lines.push(buf);
        buf = ch;
      } else {
        buf = next;
      }
    }
    if (buf) lines.push(buf);
  };

  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (textWidth(next, fontSize) <= maxWidth) {
      current = next;
    } else {
      if (current) lines.push(current);
      current = '';
      if (textWidth(word, fontSize) <= maxWidth) {
        current = word;
      } else {
        pushChunk(word);
      }
    }
  }
  if (current) lines.push(current);
  return lines.length ? lines : ['—'];
}

type Col = { key: string; label: string; width: number };

/**
 * Landscape full-page table PDF (Letter landscape) — no external deps.
 */
export function leadsToPdf(leads: Lead[]): Buffer {
  // Landscape Letter — full width for table
  const pageWidth = 792;
  const pageHeight = 612;
  const marginX = 28;
  const marginTop = 36;
  const marginBottom = 28;
  const headerFont = 10;
  const bodyFont = 8;
  const titleFont = 16;
  const metaFont = 9;
  const cellPadX = 4;
  const cellPadY = 4;
  const lineGap = 10;

  const tableLeft = marginX;
  const tableRight = pageWidth - marginX;
  const tableWidth = tableRight - tableLeft;

  // Column widths as fractions of full usable width
  const cols: Col[] = [
    { key: 'date', label: 'Date', width: tableWidth * 0.14 },
    { key: 'name', label: 'Name', width: tableWidth * 0.14 },
    { key: 'email', label: 'Email', width: tableWidth * 0.2 },
    { key: 'phone', label: 'Phone', width: tableWidth * 0.12 },
    { key: 'source', label: 'Source', width: tableWidth * 0.08 },
    { key: 'message', label: 'Message', width: tableWidth * 0.32 },
  ];

  // Normalize widths to exact tableWidth
  const widthSum = cols.reduce((s, c) => s + c.width, 0);
  cols.forEach((c) => {
    c.width = (c.width / widthSum) * tableWidth;
  });

  const colX: number[] = [];
  let xPos = tableLeft;
  for (const c of cols) {
    colX.push(xPos);
    xPos += c.width;
  }

  type PageOps = string[];
  const pages: PageOps[] = [];
  let ops: string[] = [];
  let y = pageHeight - marginTop;
  let pageNo = 0;

  const drawRect = (x: number, yy: number, w: number, h: number, fill?: [number, number, number]) => {
    if (fill) {
      ops.push(`${fill[0]} ${fill[1]} ${fill[2]} rg`);
      ops.push(`${x.toFixed(2)} ${yy.toFixed(2)} ${w.toFixed(2)} ${h.toFixed(2)} re`);
      ops.push('f');
    }
    ops.push('0.55 0.55 0.55 RG');
    ops.push('0.6 w');
    ops.push(`${x.toFixed(2)} ${yy.toFixed(2)} ${w.toFixed(2)} ${h.toFixed(2)} re`);
    ops.push('S');
  };

  const drawText = (text: string, x: number, yy: number, size: number, bold = false, color?: [number, number, number]) => {
    const [r, g, b] = color || [0.08, 0.1, 0.14];
    ops.push('BT');
    ops.push(`/${bold ? 'F2' : 'F1'} ${size} Tf`);
    ops.push(`${r} ${g} ${b} rg`);
    ops.push(`${x.toFixed(2)} ${yy.toFixed(2)} Td`);
    ops.push(`(${pdfEscape(text)}) Tj`);
    ops.push('ET');
  };

  const drawPageHeader = () => {
    pageNo += 1;
    ops = [];
    y = pageHeight - marginTop;

    drawText('Priority QB Services — Leads Export', tableLeft, y, titleFont, true);
    y -= 16;
    drawText(
      `Generated ${new Date().toLocaleString()}  ·  ${leads.length} lead(s)  ·  Page ${pageNo}`,
      tableLeft,
      y,
      metaFont
    );
    y -= 18;
  };

  const drawTableHeader = () => {
    const headerLines = cols.map((c) => wrapText(c.label, c.width - cellPadX * 2, headerFont));
    const rowLines = Math.max(...headerLines.map((l) => l.length), 1);
    const rowH = cellPadY * 2 + rowLines * lineGap;

    if (y - rowH < marginBottom) {
      pages.push(ops);
      drawPageHeader();
    }

    const bottom = y - rowH;
    // header background across full table
    drawRect(tableLeft, bottom, tableWidth, rowH, [0.04, 0.3, 0.41]);

    // column separators + labels
    cols.forEach((col, i) => {
      const x = colX[i];
      ops.push('1 1 1 RG');
      ops.push('0.5 w');
      ops.push(`${x.toFixed(2)} ${bottom.toFixed(2)} ${col.width.toFixed(2)} ${rowH.toFixed(2)} re`);
      ops.push('S');

      headerLines[i].forEach((line, li) => {
        const ty = y - cellPadY - (li + 1) * lineGap + 2;
        drawText(line, x + cellPadX, ty, headerFont, true, [1, 1, 1]);
      });
    });

    y = bottom;
  };

  const cellValues = (lead: Lead): string[] => [
    formatDate(lead.createdAt),
    lead.name || '—',
    lead.email || '—',
    lead.phone || '—',
    lead.source || 'contact',
    lead.message || '—',
  ];

  const startNewPage = () => {
    if (ops.length) pages.push(ops);
    drawPageHeader();
    drawTableHeader();
  };

  drawPageHeader();
  drawTableHeader();

  if (leads.length === 0) {
    const emptyH = 28;
    if (y - emptyH < marginBottom) startNewPage();
    const bottom = y - emptyH;
    drawRect(tableLeft, bottom, tableWidth, emptyH, [0.96, 0.97, 0.98]);
    drawText('No leads match the current filters.', tableLeft + cellPadX, bottom + 10, bodyFont);
    y = bottom;
  } else {
    leads.forEach((lead, idx) => {
      const values = cellValues(lead);
      const wrapped = values.map((val, i) =>
        wrapText(val, cols[i].width - cellPadX * 2, bodyFont)
      );
      const rowLines = Math.max(...wrapped.map((l) => l.length), 1);
      const rowH = Math.max(22, cellPadY * 2 + rowLines * lineGap);

      if (y - rowH < marginBottom) {
        startNewPage();
      }

      const bottom = y - rowH;
      const fill: [number, number, number] | undefined =
        idx % 2 === 0 ? [0.97, 0.98, 0.99] : [1, 1, 1];

      drawRect(tableLeft, bottom, tableWidth, rowH, fill);

      cols.forEach((col, i) => {
        const x = colX[i];
        // vertical grid lines
        ops.push('0.75 0.75 0.75 RG');
        ops.push('0.4 w');
        ops.push(`${x.toFixed(2)} ${bottom.toFixed(2)} m`);
        ops.push(`${x.toFixed(2)} ${(bottom + rowH).toFixed(2)} l`);
        ops.push('S');

        wrapped[i].forEach((line, li) => {
          const ty = y - cellPadY - (li + 1) * lineGap + 2;
          drawText(line, x + cellPadX, ty, bodyFont);
        });
      });

      // right edge already from outer rect
      y = bottom;
    });
  }

  // outer border refresh on last row bottom is fine
  pages.push(ops);

  // Build PDF objects
  const objects: string[] = [];
  const addObj = (content: string) => {
    objects.push(content);
    return objects.length;
  };

  addObj('<< /Type /Catalog /Pages 2 0 R >>');
  addObj(''); // pages placeholder
  addObj('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>');
  addObj('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>');

  const pageIds: number[] = [];

  for (const pageOps of pages) {
    const stream = pageOps.join('\n');
    const contentId = addObj(
      `<< /Length ${Buffer.byteLength(stream, 'utf8')} >>\nstream\n${stream}\nendstream`
    );
    const pageId = addObj(
      `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${pageWidth} ${pageHeight}] /Contents ${contentId} 0 R /Resources << /Font << /F1 3 0 R /F2 4 0 R >> >> >>`
    );
    pageIds.push(pageId);
  }

  objects[1] = `<< /Type /Pages /Kids [${pageIds.map((id) => `${id} 0 R`).join(' ')}] /Count ${pageIds.length} >>`;

  let pdf = '%PDF-1.4\n';
  const offsets: number[] = [0];

  for (let i = 0; i < objects.length; i++) {
    offsets.push(Buffer.byteLength(pdf, 'utf8'));
    pdf += `${i + 1} 0 obj\n${objects[i]}\nendobj\n`;
  }

  const xrefPos = Buffer.byteLength(pdf, 'utf8');
  pdf += `xref\n0 ${objects.length + 1}\n`;
  pdf += '0000000000 65535 f \n';
  for (let i = 1; i <= objects.length; i++) {
    pdf += `${String(offsets[i]).padStart(10, '0')} 00000 n \n`;
  }
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\n`;
  pdf += `startxref\n${xrefPos}\n%%EOF`;

  return Buffer.from(pdf, 'utf8');
}
