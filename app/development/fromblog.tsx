import React from 'react';
import Card from './card';
import Link from 'next/link';
import '@/styles/fromblog.css';

type Props = {
  btn: any;
  date: any;
  title: String;
  link: String;
  url: any;
};

const CardData = [
  {
    url: 'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f2e01cbd8323965e6629a_image-6-courses-education-x-template.jpg',
    btn: 'News',
    date: 'September 1, 2022',
    title: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    href: '#',
  },
  {
    url: 'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f2e01cbd8323965e6629a_image-6-courses-education-x-template.jpg',
    btn: 'Design',
    date: 'February 25, 2022',
    title: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    href: '#',
  },
];

const Fromblog = ({ url, btn, date, title, link }: Props) => {
  return (
    <section id="fromblog" className="fromblog ">
      <div className="fromblog__content ">
        <h2>From Blog</h2>
        <div>
          <Link href="#">View All Post</Link>
        </div>
      </div>
      <div className="fromblog__body  ">
        {/* {CardData.map((card) => (
          <Card data={card} />
        ))} */}
      </div>
    </section>
  );
};

export default Fromblog;
