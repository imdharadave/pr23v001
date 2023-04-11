import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import '@/styles/footer.css';
import SocialIcon from './SocialIcon';
import ThreelineSvg from '@/public/icons/threeline.svg';

type Props = {};

const links = [
  { page: 'Home' },
  { page: 'About' },
  { page: 'Style Guide' },
  { page: 'Lisensing' },
  { page: 'Instuction' },
];
const Footer = (props: Props) => {
  return (
    <section id="footer" className="footer">
      <ThreelineSvg className="footer__svg" />
      <div className="footer__p1">
        <Link
          href="/"
          className="btn btn--white px-3 py-1 rounded-md border border-secondary1"
        >
          Stay in touch
        </Link>
        <h2 className="pt-7 text-4xl md:text-7xl">Ready to talk</h2>
        <p className="">Feel free to Contact us</p>
        <div>Veiw on Designer</div>
      </div>
      <div className="footer__line"></div>
      <div className="footer__p2">
        <div>
          <h3 className="mb-3">MANAMI</h3>
          <p>
            MANAMI is an award UI/UX designs and branding agency based in Gujrat,
        India.
          </p>
          <div className="footer__links">
            {links.map((val) => (
              <Link href={'#'}>{val.page}</Link>
            ))}
          </div>
        </div>
        <div className="footer__info">
          <div className="footer__socialicons">
            <SocialIcon />
          </div>
          <Link href="#">hello@TSC.com</Link>
          <Link href="#">+91 3285445152</Link>
        </div>
      </div>
      <p className="footer__copyright">
        Copyright © MANAMI | Designed by MANAMI - Powered by MANAMI
      </p>
    </section>
  );
};

export default Footer;
