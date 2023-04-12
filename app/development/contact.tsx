import React from 'react';
import '@/styles/contact.css';
import Title from './title';
import RoketSvg from '@/public/icons/roket.svg';
import ContactForm from './contact/contactForm';
import Link from 'next/link';
import OurOffice from './ourOffice';
type Props = {
  btn: any;
  title: String;
  description: String;
};

const data = {
  btn: 'contact us',
  title: 'Contact',
  description: "We'd love to hear from you.",
};

const Contact = ({ btn, description, title }: Props) => {
  return (
    <section id="contact" className="contact  bg-gradient-to-r from-[#e1e7ee] to-neutral-400">
      <div className="contact__title ">
        <h1>{data.title}</h1>
        <div>
          <p className="text-left">{data.description}</p>
          <div className="relative flex">
            <Link href="/" className="btn btn--primary">
              {data.btn}
            </Link>
            <RoketSvg className="contact__tag" />
          </div>
        </div>
      </div>
      <OurOffice />
    </section>
  );
};

export default Contact;
