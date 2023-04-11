import '@/styles/aboutkofo.css';
import React from 'react';
import Image from 'next/image';
import RoketSvg from '@/public/icons/roket.svg';
import Link from 'next/link';
import ImageTransition from '@/ui/ImageTransition';

type Props = {};

function Aboutkofo({}: Props) {
  return (
    <section className="aboutkofo">
      <div className="aboutkofo__image">
        {/* <ImageTransition /> */}
        <Image
          src="https://assets.website-files.com/6315d6de2357050021f26e96/63187ca7418405f870aba348_photo-4.jpg"
          alt="Hardwork"
          fill
        />
      </div>
      <div className="aboutkofo__content">
        <h2 className="aboutkofo__h2">About Kofo</h2>
        <p>
          We are an award-winning branding and web agency committed to
          excellence since forever.
        </p>
        <p>
          We set the standard of exceptional design creatively, technically,
          sustainably, and ethically so that you can make the extraordinary
          impact impact that you seek.
        </p>

        <div className="aboutkofo__button">
          <Link href="/" className="btn btn--primary">
            View On Designer
          </Link>
          <RoketSvg className="aboutkofo__svg" />
        </div>
      </div>
    </section>
  );
}

export default Aboutkofo;
