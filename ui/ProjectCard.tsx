import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
type Props = {};

const projectdata = [
    {
      id: 1,
      img: 'https://images.pexels.com/photos/4316/technology-computer-chips-gigabyte.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'AutoWelder 1.0',
      button: 'Read More',
    },
    {
        id: 2,
        img: 'https://images.pexels.com/photos/246753/pexels-photo-246753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'AutoWelder 3.0',
        button: 'Read More',
      },
      {
        id: 3,
        img: 'https://images.pexels.com/photos/6755131/pexels-photo-6755131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'AutoCutter',
        button: 'Read More',
      },
      {
        id: 4,
        img: 'https://images.pexels.com/photos/8471981/pexels-photo-8471981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'Data Logger/Weld Metrix',
        button: 'Read More',
      },
  ];


function ProjectCard  ({}: Props) {
  return (
   <section className=" pb-16  bg-gradient-to-r from-neutral-400 to-[#e1e7ee]">
    <h2 className="text-left md:text-center pt-0 md:pt-20 lg:pt-24 text-4xl md:text-7xl text-neutral-300"> Our Project</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projectdata.map((data) => (
            <div className="bg-neutral-100 rounded-lg">
            <Link href="#">
              <div className=" relative min-h-[200px] md:aspect-video w-full rounded-lg overflow-hidden">
                <Image src={data.img} alt=""  fill/>
              </div>
            </Link>

            <div className="grid gap-4 py-8 px-4 rounded-lg bg-neutral-400 ">
              <h3 className="text-[28px] !mb-0">{data.title}</h3>
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