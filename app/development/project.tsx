import React from 'react';
import '@/styles/project.css';
import RoketSvg from '@/public/icons/roket.svg';

type Props = {
  btn: any;
  title: String;
  description: String;
};

const data = {
  btn: 'our project',
  title: 'Project',
  description: "Projects undertaken by the company",
};

const Project = ({ btn, description, title }: Props) => {
  return (
    <section id="project" className="project  bg-gradient-to-r from-[#e1e7ee] to-neutral-400">
      <div className="project__title  ">
        <h1 className='text-neutral-300'>{data.title}</h1>
        <div>
          <p className="text-left text-2xl">{data.description}</p>
          {/* <div className="relative flex">
            <RoketSvg className="project__tag" />
          </div> */}
        </div>
      </div>
     
    </section>
  );
};

export default Project;
