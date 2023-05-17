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

export default function ServiceDetails() {
  const router = useRouter();
  const serviceId = router.query.serviceId;
  return (
    <>
      <Head>
        <title>Automation Software - Manami Solutions |
          Ahmedabad, Gujarat, INDIA,
          manamisolutions.com</title>
        <meta name="description" content="Generated by Manami Solutions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <PageHeading
          title="Automation Software Development"
          bgSrc="/images/service_hero_bg.jpeg"
          pageLinkText={serviceId}
        />
        <Spacing lg="95" md="80" />
        <Div className="container">
          <SectionHeading
            title="What We Offer."
            subtitle="Automation Software Development"
            variant="cs-style1 text-center font-47px"
          />
          <Spacing lg="90" md="45" />
          <Div className="row">
            <Div className="col-lg-4">
              <IconBox
                icon="/images/icons/service_icon_1.svg"
                title="TwinCAT Application Development"
                subtitle="We provide custom software solutions for TwinCAT application development, an industrial automation software platform developed by Beckhoff Automation. Our experienced team of developers can design, develop, and implement custom TwinCAT applications that are tailored to the client's specific needs."/>
              <Spacing lg="30" md="30" />
            </Div>
            <Div className="col-lg-4">
              <IconBox
                icon="/images/icons/service_icon_2.svg"
                title="CODESYS Application Development"
                subtitle="We also offer custom software solutions for CODESYS application development, an automation software platform used to develop industrial control systems. Our developers have extensive experience in CODESYS and can develop custom applications that meet the client's requirements."/>
              <Spacing lg="30" md="30" />
            </Div>
            <Div className="col-lg-4">
              <IconBox
                icon="/images/icons/service_icon_3.svg"
                title="IOT Dashboards"
                subtitle="We also provide custom software solutions for IoT dashboards, enabling clients to visualize and analyze their IoT data in real-time."/>
              <Spacing lg="30" md="30" />
            </Div>
          </Div>
        </Div>
        <Spacing lg="80" md="50" />
        <Div className="container">
          <Div className="row align-items-center">
            <Div className="col-xl-5 col-lg-6">
              <Div className="cs-radius_15 cs-shine_hover_1">
                <img
                  src="/images/Automation_img.jpg"
                  alt="Service"
                  className="cs-radius_15 w-100"
                />
              </Div>
              <Spacing lg="0" md="40" />
            </Div>
            <Div className="col-lg-6 offset-xl-1">
              <h2 className="cs-font_45 cs-m0">
                Automation Application Services
              </h2>
              <Spacing lg="20" md="30" />
              <Div className="row">
              <Spacing lg="20" md="20" />
                <p className="cs-m0"> Our developers can design, develop, and implement custom control systems that are tailored to the client's specific needs.
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
        {/* <Spacing lg="150" md="80" /> */}
        {/* <TestimonialSlider /> */}
        {/* <Spacing lg="145" md="80" /> */}
        {/* <Div className="container cs-shape_wrap_4">
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
        </Div> */}
        <Spacing lg="120" md="80" />
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