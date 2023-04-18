import '@/styles/socialicon.css';
import React from 'react';
import Icon from '@/ui/Icon';
import Link from 'next/link';
import clsx from 'clsx';
type Props = {};

const socialicon = [
  {
    icon: 'linkedin',
    link: 'https://www.linkedin.com',
    className: 'hover:bg-[#0a66c2]',
  },
  {
    icon: 'instagram',
    link: 'https://www.instagram.com',
    className:
      'hover:bg-gradient-to-b from-[#c32aa3] via-[#A15DF0] to-[orange]',
  },
  {
    icon: 'facebook',
    link: 'https://www.facebook.com',
    className: 'hover:bg-[#1877f2]',
  },
  {
    icon: 'twitter',
    link: 'https://www.twitter.com',
    className: 'hover:bg-[#1da1f2]',
  },
  
  // {
  //   icon: 'dribbble',
  //   link: 'https://www.dribbble',
  //   className: 'hover:bg-[#ea4c89]',
  // },
];

const SocialIcon = (props: Props) => {
  return (
    <section className="socialicons">
      {socialicon.map((icon) => (
        <span
          key={icon.icon}
          className={clsx(
            `p-2 h-4 w-4 box-content rounded-full hover:scale-110 ease-in-out duration-300 hover:rounded-full hover:fill-neutral-400`,
            {
              [icon.className]: true,
            },
          )}
        >
          <Link key={icon.icon} href={icon.link} target="_blank">
            <Icon className=" " name={icon.icon} height={16} width={16} />
          </Link>
        </span>
      ))}
    </section>
  );
};

export default SocialIcon;
