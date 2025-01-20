import { notFound } from 'next/navigation';
import { ProjectsTypes } from '../../../components/projects/type';
import getPropsData from '../../../lib/getPropsData';
import ProjectsDesign from '../../../components/projects/projectsDesign/ProjectsDesign';

const MyProjects = () => {
  const projectsProps = getPropsData(
    'projects',
    'projects.mdx',
  ) as ProjectsTypes;
  if (!projectsProps) {
    notFound();
  }

  return <ProjectsDesign {...projectsProps} />;
};

export default MyProjects;
