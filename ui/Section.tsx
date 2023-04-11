import Image from 'next/image';
import '@/styles/workwithus.css';
import Link from 'next/link';
import React from 'react';
import PlaySvg from '@/public/icons/play.svg';
import TwolineSvg from '@/public/icons/twoline.svg';
import ImageTransition from './ImageTransition';

type Props = {};

const Section = (props: Props) => {
  return (
    <div className="effort">
      <div className="effort__image md:order-1">
        {/* <ImageTransition /> */}
        <Image
          src="https://assets.website-files.com/6315d6de2357050021f26e96/63172900c798f906c10618bf_photo-1-p-500.jpg"
          alt="Hardwork"
          fill
        />
      </div>
      <div className="effort__info relative">
        <p className="pb-8 text-2xl text-neutral-200">
        Our services include custom software development, process automation, workflow integration, and system integration. Whether you need a standalone software solution or want to integrate multiple systems, we have the expertise and experience to deliver a solution that meets your requirements.
        </p>
        {/* <div className="relative">
          <Link href="https://www.youtube.com/watch?v=wkhRnmLxKH4" className="">
            <Image
              src="https://assets.website-files.com/6315d6de2357050021f26e96/63172afabaf3d9640b2e3b00_play-p-500.png"
              alt="video"
              width={100}
              height={100}
              className="vidimg"
            />
            <PlaySvg className=" effort__svg absolute" />
            <TwolineSvg className="effort__twoline " />
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Section;
