import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import Accordion from '../../components/Accordion';
import Button from '../../components/Button';
import Cta from '../../components/Cta';
import Div from '../../components/Div';
import IconBox from '../../components/IconBox';
import Layout from '../../components/Layout';
import PageHeading from '../../components/PageHeading';
import SectionHeading from '../../components/SectionHeading';
import TestimonialSlider from '../../components/Slider/TestimonialSlider';
import Spacing from '../../components/Spacing';

export default function TwincatApplication() {
  const router = useRouter();
  const serviceId = router.query.serviceId;
  return (
    <>
      <Head>
        <title>Twincat Application - Manami Solutions |
          Ahmedabad, Gujarat, INDIA,
          manamisolutions.com</title>
        <meta name="description" content="Generated by Manami Solutions" />
        <link rel="icon" href="/images/manami_icon.jpg" />
      </Head>
      <Layout>
        <PageHeading
          title="Twincat Application Development"
          bgSrc="/images/service_hero_bg.jpeg"
          pageLinkText="twincat applicatin development"
        />
        <Spacing lg="85" md="80" />
        <Div className="container">
          <SectionHeading
            title="What We Offer"
            subtitle="Twincat application development"
            variant="cs-style1 text-center"
            link="/service/twincat-application"
          />
          <Spacing lg="90" md="45" />
          <Div className="row">
          <Div className="col-lg-4">
              <IconBox
                icon="/images/icons/service_icon_1.svg"
                title="Development"
                subtitle="We develop custom Twincat applications tailored to your specific needs. Whether you need a new application or want to enhance an existing one, we can help."/>
              <Spacing lg="30" md="30" />
            </Div>
            <Div className="col-lg-4">
              <IconBox
                icon="/images/icons/service_icon_2.svg"
                title="Integration"
                subtitle="Our developers are skilled at integrating Twincat with other systems, such as PLCs and HMIs, to create a seamless and efficient control system."
              />
              <Spacing lg="30" md="30" />
            </Div>
            <Div className="col-lg-4">
              <IconBox
                icon="/images/icons/service_icon_3.svg"
                title="Support"
                subtitle="We offer ongoing maintenance and support services to ensure your Twincat applications are running smoothly and efficiently."
              />
              <Spacing lg="30" md="30" />
            </Div>
            {/* <Div className="col-lg-4">
              <IconBox
                icon="/images/icons/service_icon_2.svg"
                title="Software Training"
                subtitle="We also provide training services to help your team understand the functionality and capabilities of Twincat applications."
              />
              <Spacing lg="30" md="30" />
            </Div> */}
           
          </Div>
        </Div>
        <Spacing lg="90" md="50" />
        <Div className="container">
          <Div className="row align-items-center">
            <Div className="col-xl-5 col-lg-6">
              <Div className="cs-radius_15 cs-shine_hover_1">
                <img
                  src="/images/Twincat_img.jpg"
                  alt="Service"
                  className="cs-radius_15 w-100"
                />
              </Div>
              <Spacing lg="0" md="40" />
            </Div>
            <Div className="col-lg-6 offset-xl-1">
              <h2 className="cs-font_50 cs-m0">
              Twincat Application Services
              </h2>
              <Spacing lg="20" md="30" />
              <Div className="row">
                <Spacing lg="10" md="20" />
                <p className="cs-m0"> 
                Our team of experienced developers is proficient in developing Twincat applications for various industries such as Motion, Manufacturing, Energy, and IoT. We have a proven track record of delivering successful Twincat Projects that have resulted in increased Efficiency, Reduced Downtime, and improved overall Performance.
                </p>
                <Spacing lg="10" md="20" />
                <p className="cs-m0"> 
                Our Twincat Development team is Proficient in using various Technologies such as .Net and other Frameworks to ensure that your Twincat Applications are developed to the Highest Standards. We use a Collaborative Approach with our Clients to ensure that their Specific Requirements are met and that the final product exceeds their Expectations.
                </p> 

                <Spacing lg="10" md="20" />
                <p className="cs-m0">
                Whether you're in the Motion, Manufacturing, Energy, or IoT Segment, we can help you Achieve your Automation goals with our Twincat Application Development services.
                </p>
                {/* <Div className="col-lg-6">
                  <Button
                    btnLink="/service/service-details"
                    btnText="Web page design"
                    variant="cs-type2"
                  />
                  <Spacing lg="20" md="10" />
                  <Button
                    btnLink="/service/service-details"
                    btnText="eCommerce design"
                    variant="cs-type2"
                  />
                  <Spacing lg="20" md="10" />
                  <Button
                    btnLink="/service/service-details"
                    btnText="Landing page"
                    variant="cs-type2"
                  />
                  <Spacing lg="20" md="10" />
                  <Button
                    btnLink="/service/service-details"
                    btnText="Email template"
                    variant="cs-type2"
                  />
                  <Spacing lg="20" md="10" />
                  <Button
                    btnLink="/service/service-details"
                    btnText="Application design"
                    variant="cs-type2"
                  />
                  <Spacing lg="20" md="10" />
                  <Button
                    btnLink="/service/service-details"
                    btnText="Illustration"
                    variant="cs-type2"
                  />
                  <Spacing lg="0" md="10" />
                </Div>
                <Div className="col-lg-6">
                  <Button
                    btnLink="/service/service-details"
                    btnText="Infographic design"
                    variant="cs-type2"
                  />
                  <Spacing lg="20" md="10" />
                  <Button
                    btnLink="/service/service-details"
                    btnText="Mobile apps design"
                    variant="cs-type2"
                  />
                  <Spacing lg="20" md="10" />
                  <Button
                    btnLink="/service/service-details"
                    btnText="Banner, brochure, card"
                    variant="cs-type2"
                  />
                  <Spacing lg="20" md="10" />
                  <Button
                    btnLink="/service/service-details"
                    btnText="Other design"
                    variant="cs-type2"
                  />
                  <Spacing lg="20" md="10" />
                </Div> */}
              </Div>
            </Div>
          </Div>
        </Div>
        <Spacing lg="110" md="80" />
        {/* <TestimonialSlider />
        <Spacing lg="145" md="80" />
        <Div className="container cs-shape_wrap_4">
          <Div className="cs-shape_4"></Div>
          <Div className="cs-shape_4"></Div>
          <Div className="container">
            <Div className="row">
              <Div className="col-xl-5 col-lg-6">
                <SectionHeading
                  title="Some pre questions and answers"
                  subtitle="FAQ’s"
                />
                <Spacing lg="90" md="45" />
              </Div>
              <Div className="col-lg-6 offset-xl-1">
                <Accordion />
              </Div>
            </Div>
          </Div>
        </Div>
        <Spacing lg="150" md="80" /> */}
        <Div className="container">
          <Cta
            title="Let’s disscuse make <br />something <i>cool</i> together"
            btnText="Apply For Meeting"
            btnLink="/contact"
            bgSrc="/images/cta_bg.jpeg"
          />
        </Div>
      </Layout>
    </>
  );
}
