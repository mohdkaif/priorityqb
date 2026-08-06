'use client';

import { useState } from 'react';

const QUICK = ['Track expenses', 'Find a plan', 'Payroll help', 'QB setup', 'Bookkeeping'];

type Props = {
  onEnquire: (preset?: string) => void;
};

export default function AskBar({ onEnquire }: Props) {
  const [hidden, setHidden] = useState(false);
  const [q, setQ] = useState('');

  if (hidden) return null;

  return (
    <div className="askBar" role="search">
      <button type="button" className="askBarClose" aria-label="Hide ask bar" onClick={() => setHidden(true)}>
        ✕
      </button>
      <div className="askBarTop">
        <span className="askBarIcon" aria-hidden>
          ✦
        </span>
        <input
          className="askBarInput"
          placeholder="Ask anything about QuickBooks services…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') onEnquire(q || undefined);
          }}
        />
        <button
          type="button"
          className="askBarSend"
          aria-label="Open enquiry"
          onClick={() => onEnquire(q || undefined)}
        >
          ➤
        </button>
      </div>
      <div className="askBarPills">
        {QUICK.map((item) => (
          <button key={item} type="button" onClick={() => onEnquire(item)}>
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
