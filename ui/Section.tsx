import Image from 'next/image';
import '@/styles/workwithus.css';
import Link from 'next/link';
import React from 'react';
import Home from '@/public/Images/home.png'

type Props = {};

const Section = (props: Props) => {
  return (
    <div className="workwithus">
      <div className="workwithus__image lg:order-1">
        <Image
          src={Home}
          alt="Hardwork"
          fill
        />
      </div>
      <div className="workwithus__info relative">
        <p className="pb-8 text-xl text-neutral-700">
        Our services include custom software development, process automation, workflow integration, and system integration. Whether you need a standalone software solution or want to integrate multiple systems, we have the expertise and experience to deliver a solution that meets your requirements.
        </p>
        <p className="pb-8 text-xl text-neutral-700">
        Our team of experienced developers and designers works closely with clients to understand their unique needs and create software solutions that streamline their operations and increase efficiency. From automating repetitive tasks to integrating complex workflows, our automation software is designed to help businesses save time, reduce costs, and improve accuracy
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
