import { Icon } from '@iconify/react';

import Slider from 'react-slick';
import Div from '../Div';
import Team from '../Team';

export default function TeamSlider() {
  /** Team Member Data **/
  const teamData = [
    {
      memberImage: '/images/Manan_img.jpg',
      memberName: 'Manan Bateriwala',
      memberDesignation: 'Founder & Partner',
      memberSocial: {
        // linkedin: '/',
        // twitter: '/',
        // youtube: '/',
        // facebook: '/',
      },
    },
    {
      memberImage: '/images/Ami_img.jpg',
      memberName: 'Ami Bateriwala',
      memberDesignation: 'Finance Executive & Partner',
      memberSocial: {
        // linkedin: '/',
        // twitter: '/',
        // youtube: '/',
        // facebook: '/',
      },
    },
    {
      memberImage: '/images/Navil_img.jpg',
      memberName: 'Navil Shah',
      memberDesignation: 'Technical Solution Architect',
      memberSocial: {
        // linkedin: '/',
        // twitter: '/',
        // youtube: '/',
        // facebook: '/',
      },
    },
    {
      memberImage: '/images/Sejal_img.jpeg',
      memberName: 'Sejal Rai',
      memberDesignation: 'Jr. Software Developer',
      memberSocial: {
        // linkedin: '/',
        // twitter: '/',
        // youtube: '/',
        // facebook: '/',
      },
    },
    {
      memberImage: '/images/Nikita_img.jpeg',
      memberName: 'Nikita Shrotriya',
      memberDesignation: 'Jr. Software Developer',
      memberSocial: {
        // linkedin: '/',
        // twitter: '/',
        // youtube: '/',
        // facebook: '/',
      },
    },
    {
      memberImage: '/images/Rani_img.jpeg',
      memberName: 'Rani Sharma',
      memberDesignation: 'Jr. Software Developer',
      memberSocial: {
        // linkedin: '/',
        // twitter: '/',
        // youtube: '/',
        // facebook: '/',
      },
    },
    {
      memberImage: '/images/Lakshya_img.jpeg',
      memberName: 'Lakshya Upadhyay',
      memberDesignation: 'Jr. Software Developer',
      memberSocial: {
        // linkedin: '/',
        // twitter: '/',
        // youtube: '/',
        // facebook: '/',
      },
    },
    {
      memberImage: '/images/Dhara_img.jpeg',
      memberName: 'Dhara Dave',
      memberDesignation: 'Jr. Software Developer',
      memberSocial: {
        // linkedin: '/',
        // twitter: '/',
        // youtube: '/',
        // facebook: '/',
      },
    },
    {
      memberImage: '/images/Jigar_img.jpeg',
      memberName: 'Jigar Makvana',
      memberDesignation: 'Jr. Software Developer',
      memberSocial: {
        // linkedin: '/',
        // twitter: '/',
        // youtube: '/',
        // facebook: '/',
      },
    },
    
  ];
  /** Slider Settings **/
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'slick-prev slick-arrow' + (currentSlide === 0 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
    >
      <Icon icon="bi:arrow-left" />
    </div>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'slick-next slick-arrow' +
        (currentSlide === slideCount - 1 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
    >
      <Icon icon="bi:arrow-right" />
    </div>
  );
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="cs-gap-24 cs-arrow_style2">
      {teamData.map((item, index) => (
        <Div key={index}>
          <Team
            memberImage={item.memberImage}
            memberName={item.memberName}
            memberDesignation={item.memberDesignation}
            memberSocial={item.memberSocial}
          />
        </Div>
      ))}
    </Slider>
  );
}
