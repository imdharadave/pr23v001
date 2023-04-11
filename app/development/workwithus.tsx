import '@/styles/workwithus.css';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Section from '@/ui/Section';
import AboutWorkTitle from '@/ui/AboutWorkTitle';
import Heading from '@/ui/Heading';

type Props = {};

const WorkWithUs = (props: Props) => {
  return (
    <section className="py-16 ">
      <Heading
        title=" Welcome to Manami Solutions, where we specialize in providing customized software solutions to help businesses of all sizes automate their processes and boost productivity."
        
      />
      <AboutWorkTitle />
      <Section />
    </section>
  );
};

export default WorkWithUs;
