
import TitlePage from '@/ui/titlePage';
import Testimonial from './testimonial';
import React from 'react';
import Banner from './banner';
import Work from './work';
import Funfacts from './funfacts';
import NavBar from './navBar';
import Crocard from './carousel';
import Footer from './footer';
import Video from './video';
import Scrollbutton from './scrollbutton';
import Blogcard from './blogcard';

const Page = () => {
  return (
    <>
      <NavBar />
      <Banner />
      
      <Scrollbutton />
      <Video />
      {/* <Crocard /> */}
      <Work />
      <Testimonial />
      <Funfacts />
      <Blogcard />
      <Footer />
    </>
  );
};
export default Page;
