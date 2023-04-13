import React from 'react';
import '@/styles/blog.css';
import '@/styles/card.css';
import '@/styles/title.css';
import Link from 'next/link';
import RoketSvg from '@/public/icons/roket.svg';

type Props = {
  btn: any;
  title: String;
  description: String;
};

const data = {
  btn: 'Work with Us',
  title: 'Blog',
  description: 'We share our thoughts on design. We design awesome things. ',
};



const Blog = ({ btn, description, title }: Props) => {
  return (
    <section id="blog" className="blog">
      <div className="blog__title ">
        <h1 className='text-neutral-300'>
          {data.title}
        </h1>
        <div>
          <p>{data.description}</p>
          <div className="relative flex">
            {/* <Link href="/" className="btn btn--primary border-b">
              {data.btn}
            </Link> */}
            <RoketSvg className="blog__title__svg" />
          </div>
        </div>
      </div>
      <div className="blog__content"></div>
    </section>
  );
};

export default Blog;
