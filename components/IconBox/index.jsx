import React from 'react';
import parse from 'html-react-parser';
import Div from '../Div';

export default function IconBox({ title, subtitle, icon, href }) {
  return (
    <Div className="cs-iconbox cs-style1 text-center">
      <Div className="cs-iconbox_icon">
        <a href={href}>
        <img src={icon} alt="Icon" />
        </a>
      </Div>
      <h2 className="cs-iconbox_title">{parse(title)}</h2>
      <Div className="cs-iconbox_subtitle">{parse(subtitle)}</Div>
    </Div>
  );
}
