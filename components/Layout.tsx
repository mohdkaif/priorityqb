import Header from './Header';
import Footer from './Footer';
import ContactModal from './ContactModal';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="container mainContent">{children}</main>
      <Footer />
      <ContactModal />
    </>
  );
}
