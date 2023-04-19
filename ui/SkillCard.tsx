import React from 'react';
import '@/styles/work.css';
import Link from 'next/link';

type Props = {};

const SkillCard = ({ data }) => {
  return (
    <section className="p-0">
      <div className="grid gap-12 justify-between overflow-hidden min-h-[250px] max-w-[550px] p-8 pb-14 bg-gradient-to-r from-secondary3 to-[#c4cfde]  hover:scale-95 duration-300 ease-in  group hover:bg-gradient-to-r from-neutral-400 to-[#c4cfde]">
        <figure className="relative m-0 aspect-h-image w-12 p-0">
          {data.svg}
        </figure>
        <div className="flex h-full flex-col  justify-between gap-2">
          <h4 className="mb-4  md:line-clamp-1 text-2xl md:text-4xl">{data.title}</h4>
          <p className="my-0 mb-7 h-16 p-0 line-clamp-2 text-xl">{data.description}</p>
          {/* <Link href="#">Learn More</Link> */}
        </div>
      </div>
    </section>
  );
};

export default SkillCard;
