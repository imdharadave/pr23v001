import Faq from './faq';
import TitlePage from '@/ui/titlePage';
import Testimonial from '../testimonial';
import React from 'react';
import Aboutkofo from '../aboutkofo';
import Banner from './Banner';
import Contact from './contact';
import Fromblog from '../fromblog';
import OurNews from '../ourNews';
import NavBar from '../navBar';
import Footer from '../footer';
import Scrollbutton from '../scrollbutton';
import Blogcard from '../blogcard';

const Page = () => {
  return (
    <>
      <NavBar />
      <OurNews />
      <Blogcard />
      <Scrollbutton />
      <Footer />
    </>
  );
};
export default Page;
