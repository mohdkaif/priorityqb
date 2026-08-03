import { NextRequest, NextResponse } from 'next/server';
import { getAdminSession } from '@/lib/admin-auth';
import { getLeadsPage, getLeadsStats, type LeadFilters } from '@/lib/leads';

export async function GET(request: NextRequest) {
  const session = getAdminSession();
  if (!session) {
    return NextResponse.json({ success: false, message: 'Unauthorized.' }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const page = Math.max(1, parseInt(searchParams.get('page') || '1', 10) || 1);
  const pageSize = Math.min(100, Math.max(5, parseInt(searchParams.get('pageSize') || '20', 10) || 20));

  const filters: LeadFilters = {
    q: searchParams.get('q') || undefined,
    source: searchParams.get('source') || undefined,
    dateFrom: searchParams.get('dateFrom') || undefined,
    dateTo: searchParams.get('dateTo') || undefined,
  };

  try {
    const [data, stats] = await Promise.all([
      getLeadsPage(page, pageSize, filters),
      getLeadsStats(),
    ]);
    return NextResponse.json({
      success: true,
      ...data,
      filters,
      stats,
      user: { email: session.email, name: session.name },
    });
  } catch (err) {
    console.error('Admin leads error:', err);
    return NextResponse.json(
      { success: false, message: 'Failed to load leads.' },
      { status: 500 }
    );
  }
}
