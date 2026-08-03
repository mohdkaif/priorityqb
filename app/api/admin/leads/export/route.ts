import { NextRequest, NextResponse } from 'next/server';
import { getAdminSession } from '@/lib/admin-auth';
import { getFilteredLeads, type LeadFilters } from '@/lib/leads';
import { leadsToCsv, leadsToPdf } from '@/lib/export-leads';

export async function GET(request: NextRequest) {
  const session = getAdminSession();
  if (!session) {
    return NextResponse.json({ success: false, message: 'Unauthorized.' }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const format = (searchParams.get('format') || 'csv').toLowerCase();
  if (format !== 'csv' && format !== 'pdf') {
    return NextResponse.json(
      { success: false, message: 'Invalid format. Use csv or pdf.' },
      { status: 400 }
    );
  }

  const filters: LeadFilters = {
    q: searchParams.get('q') || undefined,
    source: searchParams.get('source') || undefined,
    dateFrom: searchParams.get('dateFrom') || undefined,
    dateTo: searchParams.get('dateTo') || undefined,
  };

  try {
    const leads = await getFilteredLeads(filters, 5000);
    const stamp = new Date().toISOString().slice(0, 10);
    const base = `leads-export-${stamp}`;

    if (format === 'csv') {
      const csv = leadsToCsv(leads);
      return new NextResponse(csv, {
        status: 200,
        headers: {
          'Content-Type': 'text/csv; charset=utf-8',
          'Content-Disposition': `attachment; filename="${base}.csv"`,
          'Cache-Control': 'no-store',
        },
      });
    }

    const pdf = leadsToPdf(leads);
    return new NextResponse(new Uint8Array(pdf), {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${base}.pdf"`,
        'Cache-Control': 'no-store',
      },
    });
  } catch (err) {
    console.error('Leads export error:', err);
    return NextResponse.json(
      { success: false, message: 'Failed to export leads.' },
      { status: 500 }
    );
  }
}
