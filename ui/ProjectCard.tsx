import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Manami from '@/public/Images/manami.png';
import '@/styles/projectcard.css';
type Props = {};

const projectdata = [
    {
      id: 1,
      img: < Manami/>,
      title: 'Repeated of endeavor mr position kindness.',
      button: 'Read More',
    },
    {
        id: 1,
        img: < Manami/>,
        title: 'Repeated of endeavor mr position kindness.',
        button: 'Read More',
      },
      {
        id: 1,
        img: < Manami/>,
        title: 'Repeated of endeavor mr position kindness.',
        button: 'Read More',
      },
  ];


function ProjectCard  ({}: Props) {
  return (
   <section className='projectcard pt-20 pb-16'>
    <h1 className=' projectcard__title'>Project</h1>
    <div className='projectcard__content'>
        {projectdata.map((data) => (
            <div className="bg-secondary3 rounded-lg">
            <Link href="#">
              <div className="projectcard__image">
                <Image src={Manami} alt="" fill />
              </div>
            </Link>

            <div className="projectcard__body bg-neutral-400">
              <h3 className="h3">{data.title}</h3>
              <div className='min-h-[1px]'>
              <Link
          href="/"
          className="btn btn--white px-3 py-2 rounded-full border border-secondary1"
        >
        {data.button}
        </Link> 
        </div>
            </div>
          </div>
        ))}
   
          
          </div>
   </section>
  )
}

export default ProjectCard;