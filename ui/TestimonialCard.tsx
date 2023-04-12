import React from 'react';
import Rating from '@/ui/Rating';
import Image from 'next/image';
import '@/styles/testimonialcard.css';

export default function TestimonialCard({ data }) {
  return (
    <section className="testimonialcard ">
      <div className="testimonial__body ">
        <Rating rate={3} />
        <p className="text-center">{data.description}</p>

        <div className="testimonial__author">
          <div className="testimonial__image">
            <Image src={data.url} alt={data.name} fill />
          </div>
          <div className="testimonial__demo ">
            <p className='mb-0 text-xm'>{data.name}</p>
            <span className="text-xm text-secondary1">{data.designation}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
