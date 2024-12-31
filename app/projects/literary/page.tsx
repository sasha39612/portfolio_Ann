import { notFound } from 'next/navigation';
import getPropsData from '../../../lib/getPropsData';
import { ProjectLiteraryTypes } from '../../../components/literary/type';
import ImageTextBlocksWithTitle from '../../../components/ui/imageTextBlocksWithTitle/ImageTextBlocksWithTitle';
import FooterProject from '../../../components/shared/footerProject/FooterProject';
import styles from './literary.module.scss';
import TitleImageTextImage from '../../../components/recipe/titleImageTextImage/TitleImageTextImage';
import TextImageWithFlex from '../../../components/textImageWithFlex/TextImageWithFlex';
import ImageTextDesMob from '../../../components/ui/imageTextDesMob/ImageTextDesMob';

const Literary = () => {
  const projectProps = getPropsData(
    'projects/project',
    'literary.mdx',
  ) as ProjectLiteraryTypes;
  if (!projectProps) {
    notFound();
  }

  const {
    imageTextWithFlexLiterary,
    imageTextLiteraryDesMob,
    imageTextWithTitleLiterary,
    titleTextImageGridLiterary_1,
    titleTextImageGridLiterary,
    footerProject,
  } = projectProps;

  return (
    <>
      <TextImageWithFlex {...imageTextWithFlexLiterary} />
      <ImageTextDesMob {...imageTextLiteraryDesMob} />
      <ImageTextBlocksWithTitle
        imageTextWithTitle={imageTextWithTitleLiterary}
      />
      <TitleImageTextImage {...titleTextImageGridLiterary_1} />
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
