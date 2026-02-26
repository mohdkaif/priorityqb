'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  const isChunkError =
    error?.name === 'ChunkLoadError' ||
    (error?.message && /Loading chunk .* failed|ChunkLoadError/i.test(error.message));

  return (
    <div className="container" style={{ padding: '3rem 1rem', textAlign: 'center' }}>
      <h2 style={{ marginBottom: '1rem', color: 'var(--text)' }}>
        {isChunkError ? 'Page could not load' : 'Something went wrong'}
      </h2>
      <p style={{ marginBottom: '1.5rem', color: 'var(--text-muted)' }}>
        {isChunkError
          ? 'The page chunk failed to load (often after a dev server restart or port change).'
          : error?.message}
      </p>
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <button
          type="button"
          className="btnPrimary"
          onClick={() => window.location.reload()}
        >
          Refresh page
        </button>
        {!isChunkError && (
          <button type="button" className="btnPrimary" onClick={reset} style={{ background: 'var(--text-muted)' }}>
            Try again
          </button>
        )}
      </div>
    </div>
  );
}
