
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
     <h2 className='text-neutral-300 text-center text-4xl md:text-8xl'> Coming Soon....</h2>
     
      <Scrollbutton />
      <Footer />
    </>
  );
};
export default Page;
 {/* <Blogcard /> */}