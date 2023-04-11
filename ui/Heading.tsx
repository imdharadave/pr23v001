import React from 'react';
import clsx from 'clsx';
import '@/styles/heading.css';

type Props = {
  className: any;
  title: string;
  desc: string;
};

const Heading = ({ className, title, desc }: Props) => {
  return (
    <div
      className={clsx('title__body', {
        [className]: !!className,
      })}
    >
      <h2 className="text-neutral-300">{title}</h2>
      <span className="title__h4">{desc}</span>
    </div>
  );
};

export default Heading;
