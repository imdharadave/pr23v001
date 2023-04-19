import '@/styles/workwithus.css';
import React from 'react';
import Heading from '@/ui/Heading';
import Image from 'next/image';
import Home from '@/public/Images/home.png';
type Props = {};

const WorkWithUs = (props: Props) => {
  return (
    <section className="py-16 bg-gradient-to-r from-[#e1e7ee] to-neutral-400 ">
      <Heading
        title=" Welcome to Manami Solutions, where we specialize in providing customized software solutions to help businesses of all sizes automate their processes and boost productivity."/>
      <div className="workwithus">
      <div className="workwithus__image lg:order-1">
        <Image
          src={Home}
          alt="Hardwork"
          fill
        />
      </div>
      <div className="workwithus__info relative font-sans">
        <p className="!mb-0 text-xl text-neutral-700">
        Our services include custom software development, process automation, workflow integration, and system integration. Whether you need a standalone software solution or want to integrate multiple systems, we have the expertise and experience to deliver a solution that meets your requirements.
        </p>
        <p className=" text-xl text-neutral-700">
        Our team of experienced developers and designers works closely with clients to understand their unique needs and create software solutions that streamline their operations and increase efficiency. From automating repetitive tasks to integrating complex workflows, our automation software is designed to help businesses save time, reduce costs, and improve accuracy
        </p>
        
      </div>
    </div>
     
    </section>
  );
};

export default WorkWithUs;
