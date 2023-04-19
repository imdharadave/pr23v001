import React from 'react'
import '@/styles/whyus.css';
import SkillCard from '@/ui/SkillCard';
import WhyUsCard from '@/ui/WhyUsCard';
type Props = {};

const WhyusData = [
 
    {
      id:1,
      title: 'Customized solutions',
      description: ' We understand that every business has unique needs and requirements. That is why we work closely with clients to develop customized software solutions that meet their specific needs and goals.',
    },
    {
      id: 2,
      title: 'Experienced team',
      description: 'Our team of developers and designers has extensive experience in automation software development. We have the skills and expertise to develop solutions that are innovative, efficient, and effective.',
    },
    {
      id: 3,
      title: 'Quality assurance',
      description: 'We are committed to delivering high-quality solutions that meet the highest standards of performance, reliability, and security. We follow industry best practices to ensure that our software solutions are of the highest quality.',
    },
    {
      id: 4,
      title: 'Exceptional customer service',
      description: 'We believe in building long-term relationships with our clients. We strive to provide exceptional customer service and support to ensure that our clients are satisfied with our solutions and services.',
    },
    {
        id: 5,
        title: 'Competitive pricing',
        description: 'We offer competitive pricing for our automation software development services. We work with clients to develop solutions that fit their budget and provide the best possible value for their investment.',
      }
  ];

const WhyUs = () => {
  return (
    <section className="whyus">
      <div id="whyus" >
<h2 className=' text-start text-5xl md:text-7xl md:text-center text-neutral-300'>Why to choose us?</h2>
<p className=' text-xl md:text-3xl'>At Manami Solutions, we are dedicated to helping businesses achieve their goals through customized software solutions that improve efficiency and productivity. </p>
      </div>
      <div className="whyus__item pt-7">
        {WhyusData.map((data) => {
          return (
            <WhyUsCard data={data} key={data.id} />
          );
        })}
      </div>
    </section>
  )
}

export default WhyUs;
