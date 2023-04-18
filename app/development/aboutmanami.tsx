import '@/styles/aboutmanami.css';
import React from 'react';
import Image from 'next/image';
import About from '@/public/Images/about.png'
import RoketSvg from '@/public/icons/roket.svg';
import Link from 'next/link';


type Props = {};

function Aboutmanami({}: Props) {
  return (
    <section className="aboutmanami  bg-gradient-to-r from-[#e1e7ee] to-neutral-400">
      <div className="aboutmanami__image">
        {/* <ImageTransition /> */}
        <Image
          src={About}
          alt="Hardwork"
          fill
        />
      </div>
      <div className="aboutmanami__content">
        <h2 className="aboutmanami__h2 text-neutral-300">About Manami</h2>
        <p className='text-xl'>
          We are an award-winning branding and web agency committed to
          excellence since forever.
        </p>
        <p className='text-xl'>
        At Manami Solutions, we are committed to delivering the best possible solutions and exceptional customer service. Contact us today to learn more about how our automation software can help you take your business to the next level.
        </p>

        <div className="aboutmanami__button">
          {/* <Link href="/" className="btn btn--primary text-neutral-600">
            View On Designer
          </Link> */}
          <RoketSvg className="aboutmanami__svg" />
        </div>
      </div>
    </section>
  );
}

export default Aboutmanami;
