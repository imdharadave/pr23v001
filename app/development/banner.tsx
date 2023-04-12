import React from 'react';
import '@/styles/banner.css';
import Image from 'next/image';
import Manami from '@/public/Images/manami.png';
import RoketSvg from '@/public/icons/roket.svg';

type Props = {};

const Banner = (props: Props) => {
  return (
    <section id="banner" className="banner ">
      <div className="banner__body">
        <h1 className="banner__title text-neutral-300">
          Applying Data Science & Techniques
          <br />
          <span className="font-normalfont-bold text-neutral-200">
           with Modern Systems
          </span>
        </h1>
        <p></p>
          <div className="banner__button">
           {/* <button className="btn btn--primary">View on Designer</button> */}
          {/* <RoketSvg className="banner__svg" /> */}
        </div>
       
      </div>
      <div className="banner__content__image">
          <Image
           src={Manami}
          alt="Hardwork"
          fill
          />
      </div>
    </section>
  );
};

export default Banner;
