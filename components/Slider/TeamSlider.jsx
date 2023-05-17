import { Icon } from '@iconify/react';

import Slider from 'react-slick';
import Div from '../Div';
import Team from '../Team';

export default function TeamSlider() {
  /** Team Member Data **/
  const teamData = [
    {
      memberImage: '/images/member_1.jpeg',
      memberName: 'Manan Bateriwala',
      memberDesignation: '',
      memberSocial: {
        // linkedin: '/',
        // twitter: '/',
        // youtube: '/',
        // facebook: '/',
      },
    },
    {
      memberImage: '/images/member_2.jpeg',
      memberName: 'Ami Bateriwala',
      memberDesignation: '',
      memberSocial: {
        // linkedin: '/',
        // twitter: '/',
        // youtube: '/',
        // facebook: '/',
      },
    },
    {
      memberImage: '/images/member_3.jpeg',
      memberName: 'Navil Shah',
      memberDesignation: '',
      memberSocial: {
        // linkedin: '/',
        // twitter: '/',
        // youtube: '/',
        // facebook: '/',
      },
    },
    {
      memberImage: '/images/member_4.jpeg',
      memberName: 'Shreya Patel',
      memberDesignation: '',
      memberSocial: {
        // linkedin: '/',
        // twitter: '/',
        // youtube: '/',
        // facebook: '/',
      },
    },
    {
      memberImage: '/images/member_1.jpeg',
      memberName: 'Sejal',
      memberDesignation: '',
      memberSocial: {
        // linkedin: '/',
        // twitter: '/',
        // youtube: '/',
        // facebook: '/',
      },
    },
    {
      memberImage: '/images/member_1.jpeg',
      memberName: 'Nikita',
      memberDesignation: '',
      memberSocial: {
        // linkedin: '/',
        // twitter: '/',
        // youtube: '/',
        // facebook: '/',
      },
    },
    {
      memberImage: '/images/member_1.jpeg',
      memberName: 'Rani',
      memberDesignation: '',
      memberSocial: {
        // linkedin: '/',
        // twitter: '/',
        // youtube: '/',
        // facebook: '/',
      },
    },
    {
      memberImage: '/images/member_1.jpeg',
      memberName: 'Lakshya Upadhyay',
      memberDesignation: '',
      memberSocial: {
        // linkedin: '/',
        // twitter: '/',
        // youtube: '/',
        // facebook: '/',
      },
    },
    {
      memberImage: '/images/member_1.jpeg',
      memberName: 'Dhara Dave',
      memberDesignation: '',
      memberSocial: {
        // linkedin: '/',
        // twitter: '/',
        // youtube: '/',
        // facebook: '/',
      },
    },
    {
      memberImage: '/images/member_1.jpeg',
      memberName: 'Jigar Makvana',
      memberDesignation: '',
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
