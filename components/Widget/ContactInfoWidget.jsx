import React from 'react'
import { Icon } from '@iconify/react';
import Link from 'next/link';

export default function ContactInfoWidget({withIcon, title}) {
  return (
    <>
    <Link href="/contact">{title && <h2 className="cs-widget_title">{title}</h2>}</Link>
      
      <ul className="cs-menu_widget cs-style1 cs-mp0">
        <li>
        <Link href="tel:99 09 90 62 12">
          {withIcon?<span className='cs-accent_color mx-1 me-3'><Icon icon="material-symbols:add-call-rounded" /></span>:''}
          +91 99 09 90 62 12 <br/>
        </Link>
        </li>
        <li>
        <Link  href="mailto:info@manamisolution.com">
          {withIcon?<span className='cs-accent_color mx-1 me-3'><Icon icon="mdi:envelope" /></span>:''}
          info@manamisolution.com
        </Link>
        </li>
        <li>
          {withIcon?<span className='cs-accent_color'><Icon icon="mdi:map-marker" /></span>:''}
          822, North Plaza, 4D Rd, Chandkheda - 380005, Ahmedabad, Gujrat
        </li>
        <li>
          <Link href='https://www.google.com/maps/place/Manami+Solutions+LLP/@23.1021441,72.5919819,17z/data=!3m1!4b1!4m6!3m5!1s0x2d6b74c3c6eea111:0xf0e83ab5841c9512!8m2!3d23.1021392!4d72.5945568!16s%2Fg%2F11sf9mrqs_' target='_blank'>
          {withIcon?<span className='cs-accent_color mx-1 me-2  '><Icon icon="mdi:map-marker" /></span>:''}
          Direction
          </Link>
        </li>
      </ul>
    </>
  )
}
