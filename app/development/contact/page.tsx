import React from 'react';
import NavBar from '../navBar';
import Contact from '../contact';
import Scrollbutton from '../scrollbutton';
import Faq from '../faq';
import OurOffice from '../ourOffice';
import Footer from '../footer';
import ContactForm from './contactForm';

const Page = () => {
  return (
    <>
      <NavBar />
      <Scrollbutton />
      <Contact />
      <OurOffice />
      <ContactForm />

      {/* <Faq /> */}
      <Footer />
    </>
  );
};
export default Page;
