import React from 'react';
import '@/styles/work.css';
import Link from 'next/link';

type Props = {};

const SkillCard = ({ data }) => {
  return (
    <section className="p-0">
      <div className="grid gap-12 justify-between overflow-hidden min-h-[250px] max-w-[360px] p-8 pb-14 bg-secondary3">
        <figure className="relative m-0 aspect-h-image w-11 p-0">
          {data.svg}
        </figure>
        <div className="flex h-full flex-col  justify-between gap-2">
          <h4 className="mb-4 mt-5 line-clamp-1">{data.title}</h4>
          <p className="my-0 mb-7 h-16 p-0 line-clamp-4 ">{data.description}</p>
          {/* <Link href="#">Learn More</Link> */}
        </div>
      </div>
    </section>
  );
};

export default SkillCard;
