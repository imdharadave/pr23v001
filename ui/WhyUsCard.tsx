import React from 'react';
import '@/styles/whyus.css';
import Link from 'next/link';

type Props = {};

const WhyUsCard = ({ data }) => {
  return (
    <section className="p-0 ">
      <div className="grid content-center overflow-hidden min-h-[230px] max-w-[380px] p-8 pb-14 bg-gradient-to-r from-[#edf0f5] to-[#c4cfde]  hover:scale-95 duration-300 ease-in  group hover:bg-gradient-to-r from-neutral-400 to-[#c4cfde]">
      <h4 className="mb-4 mt-5 text-xxl line-clamp-2 font-blod">{data.title}</h4>
        <div className="flex h-full flex-col  justify-between gap-2">
          <p className="my-0 mb-7 text-xl h-16 p-0 line-clamp-3 ">{data.description}</p>
          {/* <Link href="#">Learn More</Link> */}
        </div>
      </div>
    </section>
  );
};

export default WhyUsCard;