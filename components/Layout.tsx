'use client';

import { createContext, useCallback, useContext, useState } from 'react';
import { usePathname } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';
import ContactModal from './ContactModal';
import EnquiryModal from './EnquiryModal';
import FeedbackModal from './FeedbackModal';
import WelcomePopup, { useWelcomeOnce } from './WelcomePopup';
import AskBar from './AskBar';

type UiCtx = {
  openEnquiry: () => void;
  openFeedback: () => void;
};

const SiteUiContext = createContext<UiCtx>({
  openEnquiry: () => {},
  openFeedback: () => {},
});

export function useSiteUi() {
  return useContext(SiteUiContext);
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith('/admin');
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const welcome = useWelcomeOnce();

  const openEnquiry = useCallback(() => setEnquiryOpen(true), []);
  const openFeedback = useCallback(() => setFeedbackOpen(true), []);

  if (isAdmin) {
    return <main className="admin-root">{children}</main>;
  }

  return (
    <SiteUiContext.Provider value={{ openEnquiry, openFeedback }}>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Header />
        <main className="siteMain">{children}</main>
        <Footer />
        <ContactModal />

        <button type="button" className="feedbackTab" onClick={openFeedback}>
          Feedback
        </button>

        <AskBar onEnquire={openEnquiry} />

        <WelcomePopup
          open={welcome.open && !enquiryOpen && !feedbackOpen}
          onClose={welcome.close}
          onEnquire={openEnquiry}
        />
        <EnquiryModal open={enquiryOpen} onClose={() => setEnquiryOpen(false)} />
        <FeedbackModal open={feedbackOpen} onClose={() => setFeedbackOpen(false)} />
      </div>
    </SiteUiContext.Provider>
  );
}
