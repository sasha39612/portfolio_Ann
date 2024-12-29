import { notFound } from 'next/navigation';
import getPropsData from '../../../lib/getPropsData';
import { ProjectLiteraryTypes } from '../../../components/literary/type';
import ImageTextBlocksWithTitle from '../../../components/ui/imageTextBlocksWithTitle/ImageTextBlocksWithTitle';

const Literary = () => {
  const projectProps = getPropsData(
    'projects/project',
    'literary.mdx',
  ) as ProjectLiteraryTypes;
  if (!projectProps) {
    notFound();
  }

  const { imageTextWithTitleLiterary } = projectProps;

  return (
    <>
      <ImageTextBlocksWithTitle
        imageTextWithTitle={imageTextWithTitleLiterary}
      />
    </>
  );
};

export default Literary;
