import { Children } from 'types/common';

import { ContactUs } from './ContactUs';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

export default function Layout({ children }: { children: Children }) {
  return (
    <>
      <Navbar />
      {children}
      <ContactUs />
      <Footer />
    </>
  );
}
