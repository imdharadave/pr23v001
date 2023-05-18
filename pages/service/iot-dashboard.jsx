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

export default function IoTDashboard() {
  const router = useRouter();
  const serviceId = router.query.serviceId;
  return (
    <>
      <Head>
        <title>IoT Dashboard - Manami Solutions |
          Ahmedabad, Gujarat, INDIA,
          manamisolutions.com</title>
        <meta name="description" content="Generated by Manami Solutions" />
        <link rel="icon" href="/images/manami_icon.jpg" />
      </Head>
      <Layout>
        <PageHeading
          title="IoT Dashboard Development"
          bgSrc="/images/service_hero_bg.jpeg"
          pageLinkText={serviceId}
        />
        <Spacing lg="85" md="80" />
        <Div className="container">
          <SectionHeading
            title="What We Offer."
            subtitle="IoT Dashboard Development"
            variant="cs-style1 text-center"
          />
          <Spacing lg="90" md="45" />
          <Div className="row">
            <Div className="col-lg-4">
              <IconBox
                icon="/images/icons/service_icon_1.svg"
                title="Design & Development"
                subtitle="We work closely with our clients to design and develop custom dashboards that are tailored to their specific needs. We utilize the latest platforms to ensure that our dashboards are efficient, reliable, and scalable."
              />
              <Spacing lg="30" md="30" />
            </Div>
            <Div className="col-lg-4">
              <IconBox
                icon="/images/icons/service_icon_2.svg"
                title="Integration"
                subtitle="Our developers have extensive experience integrating IoT dashboards with other systems, such as Enterprise Resource Planning (ERP) and Customer Relationship Management (CRM) systems. We ensure that the integration is seamless, efficient, and reliable."
              />
              <Spacing lg="30" md="30" />
            </Div>
            <Div className="col-lg-4">
              <IconBox
                icon="/images/icons/service_icon_3.svg"
                title="Maintenance"
                subtitle="We offer ongoing maintenance and support services to ensure that our clients' IoT dashboards are always running at optimal levels. Our support team is available around the clock to provide assistance whenever needed."
              />
              <Spacing lg="30" md="30" />
            </Div>
          </Div>
        </Div>
        <Spacing lg="90" md="50" />
        <Div className="container">
          <Div className="row align-items-center">
            <Div className="col-xl-5 col-lg-6">
              <Div className="cs-radius_15 cs-shine_hover_1">
                <img
                  src="/images/Iot_img.jpg"
                  alt="Service"
                  className="cs-radius_15 w-100"
                />
              </Div>
              <Spacing lg="0" md="40" />
            </Div>
            <Div className="col-lg-6 offset-xl-1">
              <h2 className="cs-font_50 cs-m0">
              IoT Dashboard Application Services
              </h2>
              <Spacing lg="20" md="30" />
              <Div className="row">

              <Spacing lg="10" md="20" />
                <p className="cs-m0">
                Data Gathering and Analysis is the need of the hour. We specialize in providing IoT Dashboard Development services to help our clients Visualize and Analyze their IoT data. With the rise of IoT Devices, it's essential to have a Dashboard that provides Real-time insights into the Performance of your IoT devices and their impact on your business.
               </p>
                <Spacing lg="10" md="20" />
                <p className="cs-m0">
                Our Experienced team of Developers has worked on numerous IoT Dashboard projects for clients across Various Industries, Delivering Solutions that are Efficient, Reliable, and Scalable. Our IoT Dashboard Development services are tailored to meet the specific needs of each client. We take a collaborative approach to ensure that we fully understand the client's requirements and develop solutions that meet those needs.
                 </p> 
                 <Spacing lg="10" md="20" />
                <p className="cs-m0">
                Our IoT Development team is Proficient in using various Technologies such as MQTT, Node.js, and MongoDB to ensure that our Dashboards are developed to the highest standards. We work closely with our clients throughout the development process to ensure that their needs are met, and we provide ongoing support to ensure that their Dashboards remain optimized for their needs.
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
        {/* <Spacing lg="150" md="80" /> */}
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
