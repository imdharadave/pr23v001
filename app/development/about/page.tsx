import React from 'react';
import NavBar from '../navBar';
import Aboutkofo from '../aboutkofo';
import Video from '../video';
import Developercard from '../developercard';
import Work from '../work';
import Testimonial from '../testimonial';
import Scrollbutton from '../scrollbutton';
import Footer from '../footer';
import Empty from '../empty';

const Page = () => {
  return (
    <>
      <NavBar />
      <Aboutkofo />
      <Video />
      <Developercard />
      <Work />
      {/* <Testimonial /> */}
      <Scrollbutton />
      <Footer />
    </>
  );
};
export default Page;
