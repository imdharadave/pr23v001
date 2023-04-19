import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Manami from '@/public/Images/manami.png';
import '@/styles/projectcard.css';
type Props = {};

const projectdata = [
    {
      id: 1,
      // img: 'https://images.pexels.com/photos/4316/technology-computer-chips-gigabyte.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'AutoWelder 1.0',
      button: 'Read More',
    },
    {
        id: 2,
        // img: 'https://images.pexels.com/photos/246753/pexels-photo-246753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'AutoWelder 3.0',
        button: 'Read More',
      },
      {
        id: 3,
        // img: 'https://images.pexels.com/photos/6755131/pexels-photo-6755131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'AutoCutter',
        button: 'Read More',
      },
      {
        id: 4,
        // img: 'https://images.pexels.com/photos/8471981/pexels-photo-8471981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'Data Logger/Weld Metrix',
        button: 'Read More',
      },
  ];


function ProjectCard  ({}: Props) {
  return (
   <section className="projectcard pb-16  bg-gradient-to-r from-[#e1e7ee] to-neutral-400">
    <h2 className="projectcard__title"> Our Project</h2>
    <div className="projectcard__content">
        {projectdata.map((data) => (
            <div className="bg-secondary3 rounded-lg">
            <Link href="#">
              <div className="projectcard__image ">
                <Image src={Manami} alt="" fill />
              </div>
            </Link>

            <div className="projectcard__body bg-secondary3 ">
              <h3 className="h3 !mb-0">{data.title}</h3>
              <div className='min-h-[1px]'>
              <Link
          href="/"
          className="btn btn--white px-2 py-1 rounded-lg border border-secondary1"
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