import React from 'react';
import NavBar from '../navBar';

import Video from '../workwithus';
import Developercard from '../developercard';
import Work from '../work';
import Testimonial from '../testimonial';
import Scrollbutton from '../scrollbutton';
import Footer from '../footer';
import Empty from '../empty';
import Aboutmanami from '../aboutmanami';
import WhyUs from '../whyus';

const Page = () => {
  return (
    <>
      <NavBar />
      <Aboutmanami />
      <WhyUs />
      {/* <Video /> */}
      {/* <Developercard /> */}
      {/* <Work /> */}
      {/* <Testimonial /> */}
      <Scrollbutton />
      <Footer />
    </>
  );
};
export default Page;
