import '@/styles/aboutmanami.css';
import React from 'react';
import Image from 'next/image';
import RoketSvg from '@/public/icons/roket.svg';
import Link from 'next/link';
import ImageTransition from '@/ui/ImageTransition';

type Props = {};

function Aboutmanami({}: Props) {
  return (
    <section className="aboutmanami">
      <div className="aboutmanami__image">
        {/* <ImageTransition /> */}
        <Image
          src="https://assets.website-files.com/6315d6de2357050021f26e96/63187ca7418405f870aba348_photo-4.jpg"
          alt="Hardwork"
          fill
        />
      </div>
      <div className="aboutmanami__content">
        <h2 className="aboutmanami__h2">About Manami</h2>
        <p>
          We are an award-winning branding and web agency committed to
          excellence since forever.
        </p>
        <p>
        At Manami Solutions, we are committed to delivering the best possible solutions and exceptional customer service. Contact us today to learn more about how our automation software can help you take your business to the next level.
        </p>

        <div className="aboutmanami__button">
          <Link href="/" className="btn btn--primary">
            View On Designer
          </Link>
          <RoketSvg className="aboutmanami__svg" />
        </div>
      </div>
    </section>
  );
}

export default Aboutmanami;
