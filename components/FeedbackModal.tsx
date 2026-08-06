'use client';

import { useEffect, useState } from 'react';

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function FeedbackModal({ open, onClose }: Props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [rating, setRating] = useState('5');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [response, setResponse] = useState<{ text: string; isError: boolean } | null>(null);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setResponse(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          phone,
          message: `Feedback rating ${rating} of 5. ${message}`,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setResponse({ text: data.message || 'Something went wrong.', isError: true });
        return;
      }
      setResponse({ text: 'Thank you for your feedback!', isError: false });
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      setTimeout(() => onClose(), 1500);
    } catch {
      setResponse({ text: 'Something went wrong. Please try again.', isError: true });
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="pqOverlay" onClick={onClose} role="presentation">
      <div
        className="pqWelcome"
        style={{ maxWidth: 480, textAlign: 'left' }}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="feedback-title"
      >
        <button
          type="button"
          className="pqModalClose"
          onClick={onClose}
          aria-label="Close"
          style={{ position: 'absolute' }}
        >
          ✕
        </button>
        <h2 id="feedback-title" style={{ textAlign: 'center' }}>
          Share your feedback
        </h2>
        <p style={{ textAlign: 'center', color: 'var(--muted)', marginBottom: '1.25rem' }}>
          Help us improve Priority QB Services — your voice shapes our support.
        </p>
        <form onSubmit={submit}>
          <div className="form-group">
            <label htmlFor="fb-name">Name</label>
            <input
              id="fb-name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="fb-email">Email</label>
            <input
              id="fb-email"
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="fb-phone">Phone</label>
            <input
              id="fb-phone"
              type="tel"
              className="form-control"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="fb-rating">Rating</label>
            <select
              id="fb-rating"
              className="form-control"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            >
              <option value="5">5 — Excellent</option>
              <option value="4">4 — Good</option>
              <option value="3">3 — Average</option>
              <option value="2">2 — Poor</option>
              <option value="1">1 — Very poor</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="fb-msg">Your feedback</label>
            <textarea
              id="fb-msg"
              className="form-control"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          {response && (
            <div className={`alert ${response.isError ? 'alert-danger' : 'alert-success'}`}>
              {response.text}
            </div>
          )}
          <div className="pqWelcomeActions">
            <button type="button" className="pqLinkBtn" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn btnAccent" disabled={sending}>
              {sending ? 'Sending…' : 'Submit feedback'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
