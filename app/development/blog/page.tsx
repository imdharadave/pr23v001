
import React from 'react';
import Blog from '../blog';
import NavBar from '../navBar';
import Footer from '../footer';
import Scrollbutton from '../scrollbutton';
import Blogcard from '../blogcard';

const Page = () => {
  return (
    <>
      <NavBar />
     <Blog />
      <Blogcard />
      <Scrollbutton />
      <Footer />
    </>
  );
};
export default Page;
