// import React from 'react';
// import Plus from '@/public/icons/plus.svg';
// import '@/styles/navBar.css';
// import Link from 'next/link';
// import SocialIcon from './SocialIcon';

// type Props = {};

// const navdata = [
//   {
//     id: 1,
//     link: '../development',
//     title: 'Home',
//   },
//   {
//     id: 2,
//     link: '../development/about',
//     title: 'About',
//   },
//   {
//     id: 3,
//     link: '../development/news',
//     title: 'News',
//   },
//   {
//     id: 4,
//     link: '../development/contact',
//     title: 'Contact',
//   },
// ];

// const NavBar = (props: Props) => {
//   return (
//     <header>
//       <div className="Navigation  ">
//         <Link href="../development">
//           <h2>MANAMI</h2>
//         </Link>
//         <input type="checkbox" id="clicked" className="clicked" name="rGroup" />
       
//       </div>
      
//         <ul>
//           {navdata.map((x) => (
//             <>
//               <li>
//                 <Link href={x.link}>
//                   <h2>{x.title}</h2>
//                 </Link>
//               </li>
//             </>
//           ))}
//         </ul>
//         <hr />
//         <div className="Navigation__footer">
//           <SocialIcon />
//           <div className="Navigation__footer__location">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               height="24px"
//               viewBox="0 0 24 24"
//               width="24px"
//             >
//               <path d="M0 0h24v24H0V0z" fill="none" />
//               <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z" />
//             </svg>
//             <p>London,UK</p>
//           </div>
//         </div>
      
//     </header>
//   );
// };

// export default NavBar;


import React, { useState, useEffect } from "react";
import Link from "next/link";
// import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
// import { FaLinkedinIn, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  // const [nav, setNav] = useState(false);
  // const [shadow, setShadow] = useState(false);

  // const handleNav = () => {
  //   setNav(!nav);
  // };

  // useEffect(() => {
  //   const handleShadow = () => {
  //     if (window.scrollY >= 90) {
  //       setShadow(true);
  //     } else {
  //       setShadow(false);
  //     }
  //   };
  //   window.addEventListener("scroll", handleShadow);
  // }, []);

  return (
    <div
      // className={
      //   shadow
      //     ? "fixed w-full h-20 shadow-xl z-[100]"
      //     : "fixed w-full h-20 z-[100]"
      // }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16 bg-gray-400">
        <h2 className="font-abc text-5xl">
          Dhar<span className="text-[#f6034c]">a</span>
        </h2>
        <div className="font-ABC">
          <ul className="hidden md:flex">
            <Link href="/">
              <li
                onClick={() => setNav(false)}
                className="ml-10 text-sm uppercase hover:border-b"
              >
                Home
              </li>
            </Link>
            <Link href="/#about">
              <li
                onClick={() => setNav(false)}
                className="ml-10 text-sm uppercase hover:border-b"
              >
                About
              </li>
            </Link>
            <Link href="/#services">
              <li
                onClick={() => setNav(false)}
                className="ml-10 text-sm uppercase hover:border-b"
              >
                Services
              </li>
            </Link>
            <Link href="/#myWork">
              <li
                onClick={() => setNav(false)}
                className="ml-10 text-sm uppercase hover:border-b"
              >
                My Work
              </li>
            </Link>
            <Link href="/#contact">
              <li
                onClick={() => setNav(false)}
                className="ml-10 text-sm uppercase hover:border-b"
              >
                Contact
              </li>
            </Link>
          </ul>
         
        </div>
      </div>
      <div
        // className={
        //   nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/80" : ""
        // }
      >
        <div
          // className={
          //   nav
          //     ? "md:hidden fixed left-0 top-0 w-[75%] sm:w-[65%] md:w-[45%] h-screen bg-gray-200  ease-in duration-500"
          //     : "fixed left-[-200vw] top-0  p-10 ease-in duration-500"
          // }
        >
          <div>
            <div className="flex  item-center  justify-between">
              <h2 className="font-abc text-2xl">
                Dhar<span className="text-[#f6034c]">a</span>
              </h2>
              <div
               
                className="rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer"
              >
                {/* <AiOutlineClose /> */}
              </div>
            </div>
            <div className="border-b  border-gray-400 my-0">
              <p className="  pt-4 pb-1 px-3">
                Let's build something legendary together.
              </p>
            </div>
          </div>
          <div className="py-6 flex flex-col px-3  items-center justify-center">
            <ul className="uppercase">
              <Link href="/">
                <li className="pt-0 text-sm">Home</li>
              </Link>
              <Link href="/#about">
                <li className="pt-4 text-sm">About</li>
              </Link>
              <Link href="/#services">
                <li className="pt-4 text-sm">Services</li>
              </Link>
              <Link href="/#myWork">
                <li className="pt-4 text-sm">My Work</li>
              </Link>
              <Link href="/#contact">
                <li className="pt-4 pb-4 text-sm">Contact</li>
              </Link>
            </ul>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;