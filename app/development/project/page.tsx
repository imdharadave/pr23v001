import React from 'react'
import NavBar from '../navBar';
import Footer from '../footer';
import Scrollbutton from '../scrollbutton';
import ProjectCard from '@/ui/ProjectCard';

import Blog from "../blog"
import Title from '../title';
const Page = () => {
  return (
    <>
   <NavBar />
   
   <ProjectCard />
   <Scrollbutton />
   <Footer />
    </>
  )
}

export default Page;