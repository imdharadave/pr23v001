import React from 'react'
import NavBar from '../navBar';
import Project from '../project';
import Footer from '../footer';
import Scrollbutton from '../scrollbutton';
import ProjectCard from '@/ui/ProjectCard';

import Blog from "../blog"
import Title from '../title';
const Page = () => {
  return (
    <>
   <NavBar />
   <Project />
   {/* <ProjectCard /> */}
   <Scrollbutton />
   <Footer />
    </>
  )
}

export default Page;