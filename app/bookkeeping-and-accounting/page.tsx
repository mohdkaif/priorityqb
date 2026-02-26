import styles from '../service.module.css';

export const metadata = { title: 'Bookkeeping & Accounting - Uniqonic Revolutions' };

export default function BookkeepingPage() {
  return (
    <>
      <div className="pageHeader">
        <h1>Bookkeeping &amp; Accounting</h1>
      </div>
      <section className={styles.serviceSection}>
        <div className="container">
          <div className={styles.block}>
            <h3 className={styles.blockTitle}>Small Business Bookkeeping</h3>
            <p style={{ textAlign: 'center', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              Bookkeeping for small businesses helps you keep your accounts in shape and all your records and financial data in a safe place.
            </p>
          </div>
          <div className={styles.block}>
            <h3 className={styles.blockTitle}>How our service can serve your small business</h3>
            <div className={styles.blockGrid}>
              <div>
                <ul className={styles.list}>
                  <li>Catch invoice mistakes</li>
                  <li>Track your expenses</li>
                  <li>Payroll</li>
                </ul>
                <p style={{ lineHeight: 1.7 }}>
                  Partner with a Live Bookkeeper who understands your business. They&apos;ll bring your existing financials up to date and manage your books with guaranteed accuracy going forward.
                </p>
              </div>
              <div className={styles.blockImg}>
                <img src="/img/about.jpg" alt="About our bookkeeping" />
              </div>
            </div>
          </div>
          <div className={styles.block}>
            <h3 className={styles.blockTitle}>Working with our bookkeepers</h3>
            <div className={styles.blockGrid}>
              <div className={styles.blockImg}>
                <img src="/img/bookkeeper.jpg" alt="Bookkeeper" />
              </div>
              <div>
                <p style={{ lineHeight: 1.7 }}>
                  A QuickBooks-certified bookkeeper will bring your existing financials up to date to get you started with a clean slate. Next, you&apos;ll get matched with a virtual bookkeeper who will take the lead on maintaining your books. Enjoy virtual collaboration via video chat and get detailed reports.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.block}>
            <h3 className={styles.blockTitle}>When will my books be cleaned and updated?</h3>
            <p style={{ lineHeight: 1.7 }}>
              Our bookkeepers work with you to get your books up to date and then maintain them on an ongoing basis. Timelines depend on the current state of your records and your business size. Contact us to discuss your needs.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
