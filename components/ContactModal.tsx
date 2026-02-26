'use client';

import { useState, useCallback, useEffect } from 'react';

export default function ContactModal() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState<{ text: string; isError: boolean } | null>(null);
  const [sending, setSending] = useState(false);

  const resetForm = useCallback(() => {
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
    setResponse(null);
  }, []);

  useEffect(() => {
    const modal = document.getElementById('contactModal');
    if (!modal) return;
    const onHidden = () => resetForm();
    modal.addEventListener('hidden.bs.modal', onHidden);
    return () => modal.removeEventListener('hidden.bs.modal', onHidden);
  }, [resetForm]);

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
        setResponse({
          text: data.message || 'Something went wrong. Please try again.',
          isError: true,
        });
        return;
      }

      setResponse({
        text: data.message || 'Thank you for contacting us! We will get back to you soon.',
        isError: false,
      });
      resetForm();
      setTimeout(() => {
        const modal = document.getElementById('contactModal');
        const Bootstrap = typeof window !== 'undefined' ? (window as unknown as { bootstrap?: { Modal: { getOrCreateInstance: (el: HTMLElement) => { hide: () => void } } } }).bootstrap : null;
        if (modal && Bootstrap?.Modal) {
          Bootstrap.Modal.getOrCreateInstance(modal).hide();
        }
        setResponse(null);
      }, 3000);
    } catch {
      setResponse({
        text: 'Something went wrong. Please try again.',
        isError: true,
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <div
      className="modal fade"
      id="contactModal"
      tabIndex={-1}
      aria-labelledby="contactModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="contactModalLabel">
              Contact Us
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <form id="contactForm" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Enter your message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
              {response && (
                <div
                  className={`alert ${response.isError ? 'alert-danger' : 'alert-success'}`}
                  role="alert"
                >
                  {response.text}
                </div>
              )}
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="submit"
              className="btn btn-primary"
              form="contactForm"
              disabled={sending}
            >
              {sending ? 'Sending...' : 'Submit'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
