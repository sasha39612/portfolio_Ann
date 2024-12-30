import { notFound } from 'next/navigation';
import getPropsData from '../../../lib/getPropsData';
import { ProjectLiteraryTypes } from '../../../components/literary/type';
import ImageTextBlocksWithTitle from '../../../components/ui/imageTextBlocksWithTitle/ImageTextBlocksWithTitle';
import FooterProject from '../../../components/shared/footerProject/FooterProject';
import styles from './literary.module.scss';
import TitleImageTextImage from '../../../components/recipe/titleImageTextImage/TitleImageTextImage';

const Literary = () => {
  const projectProps = getPropsData(
    'projects/project',
    'literary.mdx',
  ) as ProjectLiteraryTypes;
  if (!projectProps) {
    notFound();
  }

  const {
    imageTextWithTitleLiterary,
    titleTextImageGridLiterary,
    footerProject,
  } = projectProps;

  return (
    <>
      <ImageTextBlocksWithTitle
        imageTextWithTitle={imageTextWithTitleLiterary}
      />
      <TitleImageTextImage {...titleTextImageGridLiterary} />
      <FooterProject
        {...footerProject}
        className={styles[footerProject.className ?? ' ']}
        classNameTitle={styles.classNameTitle}
        classNameImage={''}
        classImageArrowName={styles.imageArrowName}
        classNameLink={styles.classNameLink}
      />
    </>
  );
};

export default Literary;
