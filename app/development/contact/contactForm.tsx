import Link from 'next/link';
import React from 'react';
import '@/styles/contact.css';
type Props = {};

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

const ContactForm = (props: Props) => {
  return (
    <section>
      <h2 className='  lg:text-7xl text-center pt-10 text-neutral-300'>Contact Us</h2>
      <div className="contact__body pb-10 ">
        {FormData.map((formData) => {
          return (
            <div key={formData.id} className="form ">
              {formData.type === 'textarea' ? (
                <textarea
                  name=""
                  id=""
                  rows={5}
                  placeholder={formData.placeholder}
                  className="w-full  border border-secondary3 bg-neutral-400 px-4 py-2 hover:border-neutral-[#1a67b1] outline-[#1a67b1] focus:outline"
                ></textarea>
              ) : (
                <input
                  type="text"
                  placeholder={formData.placeholder}
                  className="form__input rounded-none border border-secondary3 bg-neutral-400 hover:border-[#1a67b1] outline-[#1a67b1] focus:outline"
                />
              )}
            </div>
          );
        })}
        <Link href="/" className="btn btn--primary">
          Send Proposal
        </Link>
      </div>
    </section>
  );
};

export default ContactForm;
