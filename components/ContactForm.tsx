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
      setResponse({ text: data.message || 'Thank you! We will get back to you soon.', isError: false });
      setName(''); setEmail(''); setPhone(''); setMessage('');
    } catch {
      setResponse({ text: 'Something went wrong. Please try again.', isError: true });
    } finally {
      setSending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 500, margin: '0 auto' }}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input type="tel" id="phone" className="form-control" value={phone} onChange={(e) => setPhone(e.target.value)} required />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea id="message" className="form-control" rows={4} value={message} onChange={(e) => setMessage(e.target.value)} required />
      </div>
      {response && (
        <div className={`alert ${response.isError ? 'alert-danger' : 'alert-success'}`} role="alert">{response.text}</div>
      )}
      <button type="submit" className="btnPrimary" disabled={sending}>{sending ? 'Sending...' : 'Submit'}</button>
    </form>
  );
}
