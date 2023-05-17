import Head from 'next/head';
import React from 'react';
import Cta from '../components/Cta';
import Div from '../components/Div';
import FunFact from '../components/FunFact';
import Layout from '../components/Layout';
import PageHeading from '../components/PageHeading';
import SectionHeading from '../components/SectionHeading';
import TeamSlider from '../components/Slider/TeamSlider';
import Spacing from '../components/Spacing';

export default function About() {
  // const funfaceData = [
  //   {
  //     title: 'Global Happy Clients',
  //     factNumber: '40K',
  //   },
  //   {
  //     title: 'Project Completed',
  //     factNumber: '50K',
  //   },
  //   {
  //     title: 'Team Members',
  //     factNumber: '245',
  //   },
  //   {
  //     title: 'Digital products',
  //     factNumber: '550',
  //   },
  // ];
  return (
    <>
      <Head>
        <title>About - Manami Solutions |
          Ahmedabad, Gujarat, INDIA,
          manamisolutions.com</title>
        <meta name="description" content="Generated by Manami Solutions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        {/* Start Page Heading Section */}
        <PageHeading
          title="About Us"
          bgSrc="images/about_hero_bg.jpeg"
          pageLinkText="About Us"
        />
        {/* End Page Heading Section */}

        {/* Start About Section */}
        <Spacing lg="80" md="80" />
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-5 col-lg-7">
              <SectionHeading
                title="Your trusted partner for business"
                subtitle="Who Are We"
              >
                <Spacing lg="30" md="20" />
                <p className="cs-m0">
                We offer a range of software solutions for PLC automation including TwinCAT and CODESYS application development, custom control systems, IOT dashboards, and visual components plugins. Our software solutions for automation are designed to improve productivity, reduce costs, and increase efficiency in manufacturing and industrial processes.
                </p>
                <Spacing lg="30" md="30" />
                <Div className="cs-separator cs-accent_bg"></Div>
                <Spacing lg="25" md="40" />
              </SectionHeading>
            </Div>
            <Div className="col-lg-5 offset-xl-2">
              <img
                src="/images/about_1.jpeg"
                alt="About"
                className="w-100 cs-radius_15"
              />
              <Spacing lg="25" md="25" />
            </Div>
            <Div className="col-lg-7">
              <img
                src="/images/about_2.jpeg"
                alt="About"
                className="w-100 cs-radius_15"
              />
              <Spacing lg="25" md="25" />
            </Div>
            <Div className="col-lg-5">
              <img
                src="/images/about_3.jpeg"
                alt="About"
                className="w-100 cs-radius_15"
              />
              <Spacing lg="25" md="25" />
            </Div>
          </Div>
        </Div>
        {/* <Spacing lg="75" md="55" /> */}
        {/* End About Section */}

        {/* Start Fun Fact Section */}
          {/* <Div className="container">
            <FunFact
              title="Our fun fact"
              subtitle="Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis."
              data={funfaceData}
            />
          </Div> */}
        {/* End Fun Fact Section */}

        {/* Start Why Choose Section */}
        <Spacing lg="100" md="80" />
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-5 col-lg-6">
              <Div className="cs-image_layer cs-style1">
                <Div className="cs-image_layer_in">
                  <img
                    src="/images/why_choose_us.jpg"
                    alt="About"
                    className="w-100 cs-radius_15"
                  />
                </Div>
              </Div>
              <Spacing lg="0" md="40" />
            </Div>
            <Div className="col-xl-5 offset-xl-1 col-lg-6">
              <SectionHeading
                title="Highly experienced pepole with us"
                subtitle="Why Choose Us"
              >
                <Spacing lg="30" md="20" />
                <p className="cs-m0">
                At Manami Solutions we provide software solutions for automation domain to help our clients optimize their manufacturing and industrial processes. We have a team of experienced developers who have worked on numerous automation software projects for clients across various industries.
                </p>
                <Spacing lg="15" md="15" />
                <p className="cs-m0">
                Our mission is to help our clients achieve their goals by providing customized software solutions that meet their unique needs. We believe that software solutions should not only improve efficiency but also add value to the organization.
                </p>
                <Spacing lg="30" md="30" />
                <Div className="cs-separator cs-accent_bg"></Div>
                <Spacing lg="25" md="0" />
              </SectionHeading>
            </Div>
          </Div>
        </Div>
        {/* End Why Choose Section */}

        {/* Start Team Section */}
        <Spacing lg="100" md="80" />
        <Div className="container">
          <SectionHeading
            title="Awesome team <br/>members"
            subtitle="Our Team"
            variant="cs-style1"
          />
          <Spacing lg="75" md="45" />
          <TeamSlider />
        </Div>
        {/* End Team Section */}

        {/* Start CTA Section */}
        <Spacing lg="100" md="80" />
        <Div className="container">
          <Cta
            title="Let’s disscuse make <br />something <i>cool</i> together"
            btnText="Apply For Meeting"
            btnLink="/contact"
            bgSrc="/images/cta_bg.jpeg"
          />
        </Div>
        {/* End CTA Section */}
      </Layout>
    </>
  );
}