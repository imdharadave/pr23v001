import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import Cta from '../../components/Cta';
import Div from '../../components/Div';
import Layout from '../../components/Layout';
import PageHeading from '../../components/PageHeading';
import Spacing from '../../components/Spacing';
import SocialWidget from '../../components/Widget/SocialWidget';

export default function TeamDetails() {
  const router = useRouter();
  const teamId = router.query.teamId;
  return (
    <>
      <Head>
        <title>Team - {teamId}</title>
        <meta name="description" content="Generated by Manami Solutions" />
        <link rel="icon" href="/images/manami_icon.jpg" />
      </Head>
      <Layout>
        <PageHeading
          title="Team Details"
          bgSrc="/images/team_hero_bg.jpeg"
          pageLinkText="Team Details"
        />
        <Spacing lg="150" md="80" />
        <Div className="container">
          <Div className="row align-items-center">
            <Div className="col-xl-5 col-lg-6">
              <Div className="cs-radius_15 cs-shine_hover_1">
                <img
                  src="/images/member_details_1.jpeg"
                  alt="Member"
                  className="w-100"
                />
              </Div>
            </Div>
            <Div className="col-lg-6 offset-xl-1">
              <Spacing lg="0" md="45" />
              <Div className="cs-section_heading cs-style1">
                <h2 className="cs-section_title">Melon Bulgery</h2>
                <Div className="cs-height_10 cs-height_lg_10" />
                <h3 className="cs-section_subtitle">Product Designer</h3>
                <Div className="cs-height_5 cs-height_lg_5" />
                <Div className="cs-separator cs-accent_bg" />
                <Div className="cs-height_45 cs-height_lg_25" />
                <p className="cs-m0">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium voltire doloremque laudantium, totam rem aperiam,
                  eaque ipsa quae ab illo inventore veritatis et quasi
                  architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                  voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                  sed quia consequuntur magni dolores eos qui ratione voluptatem
                  sequi nesciunt.
                </p>
                <Div className="cs-height_25 cs-height_lg_20" />
                <p className="cs-m0">
                  Ipsum quia dolor sit amet, consectetur, adipisci velit, sed
                  quia non numquam eius modi tempora incidunt ut labore et
                  dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
                  veniam, quis nostrum exercitationem ullam corporis suscipit.
                </p>
                <Div className="cs-height_45 cs-height_lg_30" />
                <SocialWidget />
              </Div>
            </Div>
          </Div>
        </Div>
        <Spacing lg="150" md="80" />
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
