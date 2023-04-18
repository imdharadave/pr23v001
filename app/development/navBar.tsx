'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import ManamiLogo from '@/public/Images/Manami_logo.jpg';
import Image from "next/image";
const navbardata = [
  {
    id: 1,
    title: 'Home',
    link: '../development',
  },
  {
    id: 2,
    title: 'About',
    link: '../development/about',
  },
  {
    id: 3,
    title: 'Project',
    link: '../development/project',
  },
  {
    id: 4,
    title: 'Blog',
    link: '../development/blog',
  },
  {
    id: 5,
    title: 'Contact',
    link: '../development/contact',
  },
  
  
];

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[10]"
          : "fixed w-full h-20 z-[10]"
      }
    >
      <div className="flex justify-between items-center h-full px-10 2xl:px-16 bg-gradient-to-r from-neutral-400 to-[#e1e7ee] ">
      <div className="!w-32 md:!w-52">
        <Image  src={ManamiLogo}
      alt= "manami_logo"
      />
      </div>
      
      
        <div className="">
       
          <ul className="hidden md:flex ">
          {navbardata.map((data) => (
        
        <Link  href={data.link} target="_blank" >
        <li className="ml-14 text-sm uppercase  hover:border-b border-neutral-300"onClick={() => setNav(false)}>{data.title}</li>
        </Link>
    ))}
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/80" : ""
        }
      >
        <div
          className={
            nav
              ? "md:hidden fixed left-0 top-0 w-full h-screen bg-neutral-400  ease-in duration-500"
              : "fixed left-[-200vw] top-0  p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex  item-center pl-4 justify-between">
              <div className="!w-32 pt-2"> <Image  src={ManamiLogo}
               alt= "manami_logo"
                 /></div>
            
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-neutral-300 p-3 cursor-pointer"
              >
                <AiOutlineClose/>
              </div>
            </div>
            
          </div>
          <div className="py-6 flex flex-col px-3  items-center justify-center">
            <ul className="uppercase">
            {navbardata.map((data) => (
        
        <Link  href={data.link} >
        <li className="pt-0 text-sm">{data.title}</li>
        </Link>
    ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;