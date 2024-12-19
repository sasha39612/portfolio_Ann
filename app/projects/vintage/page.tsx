import { notFound } from 'next/navigation';
import getPropsData from '../../../lib/getPropsData';
import { ProjectSavingTypes } from '../../../components/saving/type';
import ProjectVintage from '../../../components/vintage/Vintage';

const Vintage = () => {
  const projectProps = getPropsData(
    'projects/project',
    'vintage.mdx',
  ) as ProjectSavingTypes;
  if (!projectProps) {
    notFound();
  }

  return <ProjectVintage {...projectProps} />;
};

export default Vintage;
