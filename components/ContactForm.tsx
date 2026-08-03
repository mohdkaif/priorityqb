'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState<{ text: string; isError: boolean } | null>(null);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setResponse(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, message }),
      });
      const data = await res.json();
      if (!res.ok) {
        setResponse({ text: data.message || 'Something went wrong.', isError: true });
        return;
      }
      setResponse({
        text: data.message || 'Thank you! We will get back to you soon.',
        isError: false,
      });
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    } catch {
      setResponse({ text: 'Something went wrong. Please try again.', isError: true });
    } finally {
      setSending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="contact-name">Name</label>
        <input
          id="contact-name"
          className="form-control"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="contact-email">Email</label>
        <input
          id="contact-email"
          className="form-control"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="contact-phone">Phone</label>
        <input
          id="contact-phone"
          className="form-control"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          placeholder="10-digit number"
        />
      </div>
      <div className="form-group">
        <label htmlFor="contact-message">Message</label>
        <textarea
          id="contact-message"
          className="form-control"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>
      {response && (
        <div className={`alert ${response.isError ? 'alert-danger' : 'alert-success'}`} role="alert">
          {response.text}
        </div>
      )}
      <button type="submit" className="btn btnPrimary" disabled={sending} style={{ width: '100%' }}>
        {sending ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  );
}
