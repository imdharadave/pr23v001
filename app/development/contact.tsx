import React from 'react';
import '@/styles/contact.css';
import Title from './title';
import RoketSvg from '@/public/icons/roket.svg';

type Props = {
  btn: any;
  title: String;
  description: String;
};

const data = {
  btn: 'View all Work',
  title: 'Contact',
  description: "We'd love to hear from you.",
};

const FormData = [
  {
    id: 'txtName',
    type: 'name',
    placeholder: 'Name*',
  },
  {
    id: 'txtName',
    type: 'company name',
    placeholder: 'Company Name',
  },
  {
    id: 'txtEmail',
    type: 'email',
    placeholder: 'Email*',
  },

  {
    id: 'txtPhone',
    type: 'tel',
    placeholder: '+91 1234 5678 90',
  },
  {
    id: 'txtWebsite URL',
    type: 'txtWebsite URL',
    placeholder: 'Website URL*',
  },
  {
    id: 'txtProject Details',
    type: 'textarea',
    placeholder: 'Project Details*',
  },
];

const Contact = ({ btn, description, title }: Props) => {
  return (
    <section id="contact" className="contact">
      <div className="contact__title">
        <h1>{data.title}</h1>
        <div className="relative">
          <p>{data.description}</p>
          <button className="btn btn--primary">{data.btn}</button>
          <RoketSvg className="contact__tag" />
        </div>
      </div>
      <div className="contact__body">
        {FormData.map((formData) => {
          return (
            <div key={formData.id} className="form">
              {formData.type === 'textarea' ? (
                <textarea
                  name=""
                  id=""
                  rows={5}
                  placeholder={formData.placeholder}
                  className="w-full  border border-secondary3 bg-neutral-400 px-4 py-2 outline-neutral-400 focus:outline"
                ></textarea>
              ) : (
                <input
                  type="text"
                  placeholder={formData.placeholder}
                  className="form__input rounded-none border border-secondary3 bg-neutral-400"
                />
              )}
            </div>
          );
        })}
        <button className="btn btn--primary ">send proposal</button>
      </div>
    </section>
  );
};

export default Contact;
