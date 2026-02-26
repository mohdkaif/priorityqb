
export const metadata = { title: 'Payroll Service - Uniqonic Revolutions' };

export default function PayrollServicePage() {
  return (
    <>
      <div className="pageHeader">
        <h1>Payroll Services</h1>
      </div>
      <section style={{ padding: 'clamp(1.5rem, 4vw, 2.5rem) 0' }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <div style={{ marginBottom: '2rem', background: 'var(--surface)', borderRadius: '12px', padding: '1.5rem', boxShadow: 'var(--shadow)' }}>
            <h3 style={{ color: 'var(--primary)', fontSize: '1.25rem', marginBottom: '1rem', fontWeight: 700 }}>US Payroll &amp; Compliance</h3>
            <p style={{ lineHeight: 1.7, marginBottom: '1rem' }}>
              The United States is home to approximately 330 million people and the largest economy in the world. With a huge economy the US offers a huge customer base and a highly skilled workforce. With such a huge workforce payroll processing is a huge market due to the complexities involved and the laws varying in each of the 50 states.
            </p>
            <p style={{ lineHeight: 1.7, marginBottom: '1rem' }}>
              Before setting up your organisation it is important to understand the payroll regulatory requirements of each state as the rules vary significantly and the penalties for non-compliance are severe. The Fair Labor Standards Act (FLSA) provides guidelines; different states may frame their own laws. Employers need to maintain data such as:
            </p>
            <ul style={{ listStyle: 'square', paddingLeft: '1.25rem', lineHeight: 1.7 }}>
              <li>Employee&apos;s full name and social security number</li>
              <li>Address, including zip code</li>
              <li>Hours worked each day and total hours each workweek</li>
              <li>Regular hourly pay rate and total wages paid each pay period</li>
              <li>All additions to or deductions from wages</li>
              <li>Date of payment and the pay period covered</li>
            </ul>
          </div>
          <div style={{ marginBottom: '2rem', background: 'var(--surface)', borderRadius: '12px', padding: '1.5rem', boxShadow: 'var(--shadow)' }}>
            <h3 style={{ color: 'var(--primary)', fontSize: '1.25rem', marginBottom: '1rem', fontWeight: 700 }}>Additional Employer Requirements</h3>
            <ul style={{ listStyle: 'square', paddingLeft: '1.25rem', lineHeight: 1.7 }}>
              <li>Filing Form 941 (quarterly reconciliation) at the end of every quarter</li>
              <li>Filing Form W-3 with the Social Security Administration (SSA) each year</li>
              <li>Providing all employees with Form W-2 by January 31 of every year</li>
            </ul>
            <p style={{ lineHeight: 1.7, marginTop: '1rem' }}>
              The major payroll software used includes Gusto Payroll, Paychex, ADP Payroll, QuickBooks Payroll, etc.
            </p>
          </div>
          <div style={{ marginBottom: '2rem', background: 'var(--surface)', borderRadius: '12px', padding: '1.5rem', boxShadow: 'var(--shadow)' }}>
            <h3 style={{ color: 'var(--primary)', fontSize: '1.25rem', marginBottom: '1rem', fontWeight: 700 }}>Payroll Entries</h3>
            <p style={{ lineHeight: 1.7 }}>
              Payroll is one of the most regular compliance requirements employers need to fulfil. Recording payroll in a timely and proper manner helps in issuance of W-2 before the deadline. The recording of payroll and payment of taxes is dependent on the reports generated from the software on a pay period basis. Payroll journal entries are used to record the compensation paid to employees.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
