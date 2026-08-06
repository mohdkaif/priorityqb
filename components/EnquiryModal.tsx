'use client';

import { useEffect, useState } from 'react';

const NEEDS = [
  'QuickBooks setup',
  'Bookkeeping',
  'Payroll',
  'Send invoices',
  'Track expenses',
  'Run reports',
  'Technical support',
  'Cash flow insights',
];

const EMPLOYEES = ['Just me', '2-9', '10 or more'];

const MEDIA =
  'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80';

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function EnquiryModal({ open, onClose }: Props) {
  const [needs, setNeeds] = useState<string[]>(['Bookkeeping']);
  const [employees, setEmployees] = useState('Just me');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [response, setResponse] = useState<{ text: string; isError: boolean } | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  const toggleNeed = (item: string) => {
    setNeeds((prev) =>
      prev.includes(item) ? prev.filter((n) => n !== item) : [...prev, item]
    );
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setResponse(null);
    const composed = [
      message.trim(),
      needs.length ? `Business needs - ${needs.join(', ')}` : '',
      `Employees - ${employees}`,
    ]
      .filter(Boolean)
      .join('. ');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          phone,
          message: composed || 'Enquiry from website popup',
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setResponse({ text: data.message || 'Something went wrong.', isError: true });
        return;
      }
      setResponse({
        text: data.message || 'Thanks! We will get back to you soon.',
        isError: false,
      });
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      setTimeout(() => onClose(), 1800);
    } catch {
      setResponse({ text: 'Something went wrong. Please try again.', isError: true });
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="pqOverlay" onClick={onClose} role="presentation">
      <div
        className="pqModal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="enquiry-title"
      >
        <button type="button" className="pqModalClose" onClick={onClose} aria-label="Close">
          ✕
        </button>
        <div
          className="pqModalMedia"
          style={{ backgroundImage: `url(${MEDIA})` }}
          aria-hidden
        />
        <div className="pqModalBody">
          <h2 id="enquiry-title">Tell us about your business</h2>
          <form onSubmit={submit}>
            <span className="pqFieldLabel">What are your business needs?</span>
            <div className="pqPills">
              {NEEDS.map((item) => (
                <button
                  key={item}
                  type="button"
                  className={`pqPill ${needs.includes(item) ? 'pqPillActive' : ''}`}
                  onClick={() => toggleNeed(item)}
                >
                  {item}
                </button>
              ))}
            </div>

            <span className="pqFieldLabel">How many employees do you have?</span>
            <div className="pqRadios">
              {EMPLOYEES.map((opt) => (
                <label key={opt} className="pqRadio">
                  <input
                    type="radio"
                    name="employees"
                    value={opt}
                    checked={employees === opt}
                    onChange={() => setEmployees(opt)}
                  />
                  {opt}
                </label>
              ))}
            </div>

            <div className="form-group">
              <label htmlFor="enq-name">Name</label>
              <input
                id="enq-name"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="enq-email">Email</label>
              <input
                id="enq-email"
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="enq-phone">Phone</label>
              <input
                id="enq-phone"
                type="tel"
                className="form-control"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                placeholder="10-digit number"
              />
            </div>
            <div className="form-group">
              <label htmlFor="enq-msg">Anything else?</label>
              <textarea
                id="enq-msg"
                className="form-control"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us about your QuickBooks goals…"
              />
            </div>

            {response && (
              <div className={`alert ${response.isError ? 'alert-danger' : 'alert-success'}`}>
                {response.text}
              </div>
            )}

            <div className="pqModalActions">
              <button type="submit" className="btn btnPrimary" disabled={sending}>
                {sending ? 'Sending…' : 'Continue'}
              </button>
              <button type="button" className="pqLinkBtn" onClick={onClose}>
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
