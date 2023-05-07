import Faq from './faq';
import TitlePage from '@/ui/Heading';
import Testimonial from './testimonial';
import React from 'react';
import Banner from './banner';
import Work from './work';
import NavBar from './navBar';
import Crocard from './carousel';
import Footer from './footer';
import Video from './workwithus';
import Scrollbutton from './scrollbutton';
import Blogcard from './blogcard';
import WorkWithUs from './workwithus';

const Page = () => {
  return (
    <>
      <NavBar />
      <Banner /> 
      <Scrollbutton />
      <WorkWithUs />
      <Work />
      <Testimonial />
      {/* <Blogcard /> */}
      <Footer />
    </>
  );
};
export default Page;
