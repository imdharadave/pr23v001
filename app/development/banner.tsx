import React from 'react';
import '@/styles/banner.css';
import RoketSvg from '@/public/icons/roket.svg';

type Props = {};

const Banner = (props: Props) => {
  return (
    <section id="banner" className="banner ">
      <div className="banner__body">
        <h1 className="banner__title">
          Applying Data Science & Techniques
          <br />
          <span className="font-normal text-neutral-200">
           with Modern Systems
          </span>
        </h1>
        <p>
        Welcome to Manami Solutions, where we specialize in providing customized software solutions to help businesses of all sizes automate their processes and boost productivity
          </p>
          <div className="banner__button">
           <button className="btn btn--primary">View on Designer</button>
          {/* <RoketSvg className="banner__svg" /> */}
        </div>
       
      </div>
      <div className="banner__content">
          <img src='https://manamisolutions.com/wp-content/uploads/2020/07/5.png'></img>
      </div>
    </section>
  );
};

export default Banner;
