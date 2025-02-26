import { notFound } from 'next/navigation';
import getPropsData from '../../../lib/getPropsData';
import ProjectVintage from '../../../components/vintage/Vintage';
import { ProjectVintageTypes } from '../../../components/vintage/type';

const Vintage = () => {
  const projectProps = getPropsData(
    'projects/project',
    'vintage.mdx',
  ) as ProjectVintageTypes;
  if (!projectProps) {
    notFound();
  }

  return <ProjectVintage {...projectProps} />;
};

export default Vintage;
