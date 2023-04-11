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
    id:1,
    svg: <ProcessAutomationSvg />,
    title: 'Process automation',
    description: 'We can automate repetitive and time-consuming tasks to save businesses time, reduce costs, and improve accuracy. Our process automation services can help businesses achieve their goals faster and with greater precision.',
  },
  {
    id: 2,
    svg:<WorkflowSvg />,
    title: 'Workflow integration',
    description: 'We can integrate multiple systems to create a unified workflow that streamlines operations and improves efficiency. Our workflow integration services help businesses eliminate redundancies and optimize their workflows.',
  },
  {
    id: 3,
    svg: <SystemIntegratiomSvg />,
    title: 'System integration',
    description: 'We can integrate various systems to create a cohesive IT infrastructure that works seamlessly together. Our system integration services help businesses achieve greater efficiency and reduce costs by eliminating the need for manual data entry and duplication of effort.',
  },
  {
    id: 4,
    svg: <CustomSoftwareSvg/>,
    title: 'Custom software development',
    description: 'We work closely with clients to understand their unique needs and develop customized software solutions to meet their specific requirements. Our software solutions are designed to streamline operations and increase efficiency.',
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
            <SkillCard data={work} key={work.id} />
          );
        })}
      </div>
    </section>
  );
};

export default Work;
