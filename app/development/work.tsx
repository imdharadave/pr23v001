import React from 'react';
import '@/styles/work.css';
import Link from 'next/link';
import CustomSoftwareSvg from '@/public/icons/customSoftware.svg';
import ProcessAutomationSvg from '@/public/icons/processAutomation.svg';
import WorkflowSvg from '@/public/icons/workflow.svg';
import SystemIntegratiomSvg from '@/public/icons/systemIntegration.svg';
import SkillCard from '@/ui/SkillCard';
type Props = {};

const WorkData = [
  {
    id: 1,
    svg: <CustomSoftwareSvg/>,
    title: 'Custom software development',
    description: 'We work closely with clients to understand their unique needs and develop customized software solutions to meet their specific requirements. Our software solutions are designed to streamline operations and increase efficiency.',
  },
  {
    id:2,
    svg: <ProcessAutomationSvg />,
    title: 'Process automation',
    description: 'We can automate repetitive and time-consuming tasks to save businesses time, reduce costs, and improve accuracy. Our process automation services can help businesses achieve their goals faster and with greater precision.    ',
  },
  {
    id: 3,
    svg:<WorkflowSvg />,
    title: 'Workflow integration',
    description: 'We can integrate multiple systems to create a unified workflow that streamlines operations and improves efficiency. Our workflow integration services help businesses eliminate redundancies and optimize their workflows.',
  },
  {
    id: 4,
    svg: <SystemIntegratiomSvg />,
    title: 'System integration',
    description: 'We can integrate various systems to create a cohesive IT infrastructure that works seamlessly together. Our system integration services help businesses achieve greater efficiency and reduce costs by eliminating the need for manual data entry and duplication of effort.',
  }
];

const Work = (props: Props) => {
  return (
    <section id="work" className="work ">
      <h3 className="work__title">
      We provide you with a range of services designed to help businesses of all sizes automate their processes and boost productivity. Some of the services we offer include:

      </h3>
      <div className="work__item">
        {WorkData.map((work) => {
          return (
            // <div className="work__card">
            //   <div className="work__card__content">
            //     <figure className="w-14 h-14 mb-8">{work.svg}</figure>
            //     <div>
            //       <h4 className="work__card__title">{work.title}</h4>
            //       <p className="work__card__desc">{work.description}</p>
            //       <Link href="#">Learn More</Link>
            //     </div>
            //   </div>
            // </div>
            <SkillCard data={work} key={work.id} />
          );
        })}
      </div>
    </section>
  );
};

export default Work;
