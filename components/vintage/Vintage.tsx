'use client';
import styles from './vintage.module.scss';
import { ProjectVintageTypes } from './type';
import FooterProject from '../shared/footerProject/FooterProject';
import TextBlock from './textBlock/TextBlock';
import TextImageWithFlex from '../textImageWithFlex/TextImageWithFlex';
import TextBlockWithTitle from '../ui/textBlockWithTitle/TextBlockWithTitle';
import ImageTextDesMob from './imageTextDesMob/ImageTextDesMob';
import useCheckMobileScreen from '../../lib/hooks/useCheckMobileScreen';
import ImageComponent from '../ui/image/Image';

const ProjectVintage = (props: ProjectVintageTypes) => {
  const {
    imageTextWithFlexVintage,
    imageTextWithFlexVintage_1,
    textWithTitleVintage,
    imageTextVintageDesMob,
    textWithTitleVintage_1,
    textWithTitleVintage_2,
    imageBackground,
    imageTextVintage_13,
    footerProject,
  } = props;
  const isMobileView = useCheckMobileScreen();
  const { imagePartMobile, imagePartDesktop } = imageBackground;

  return (
    <>
      <TextImageWithFlex {...imageTextWithFlexVintage} />
      <TextImageWithFlex {...imageTextWithFlexVintage_1} />
      <TextBlockWithTitle textWithTitle={textWithTitleVintage} />
      <ImageTextDesMob {...imageTextVintageDesMob} />
      <TextBlockWithTitle textWithTitle={textWithTitleVintage_1} />
      <TextBlockWithTitle textWithTitle={textWithTitleVintage_2} />
      {isMobileView ? (
        <ImageComponent
          {...imagePartMobile}
          className={styles[imagePartMobile?.className ?? '']}
        />
      ) : (
        <ImageComponent
          {...imagePartDesktop}
          className={styles[imagePartDesktop?.className ?? '']}
        />
      )}
      <TextBlock textPart={imageTextVintage_13} />
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

export default ProjectVintage;
