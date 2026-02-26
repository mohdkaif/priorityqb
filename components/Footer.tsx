import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div>
          <h5 style={{ color: '#fff', marginBottom: '0.5rem', fontSize: '1rem' }}>Contact Us</h5>
          <p className="mb-2">
            <i className="far fa-envelope me-2" />
            <a href="mailto:care@uniqonicrevolutions.com">care@uniqonicrevolutions.com</a>
          </p>
          <a className="btn btn-sm btn-outline-light rounded-circle me-1" href="#" aria-label="LinkedIn">
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
        <div className="footerCopyright">
          © <Link href="/">Uniqonic Revolutions</Link>, All Right Reserved.
        </div>
      </div>
    </footer>
  );
}
