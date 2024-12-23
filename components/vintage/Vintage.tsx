'use client';
import FooterProject from '../shared/footerProject/FooterProject';
import TextBlock from './textBlock/TextBlock';
import TextImageWithFlex from '../textImageWithFlex/TextImageWithFlex';
import TextBlockWithTitle from '../ui/textBlockWithTitle/TextBlockWithTitle';
import ImageTextDesMob from '../ui/imageTextDesMob/ImageTextDesMob';
import ImageComponent from '../ui/image/Image';
import ImageTextSimple from '../ui/imageTextSimple/ImageTextSimple';
import ImageTextSwiperDouble from '../ui/imageTextSwiperDoble/ImageTextSwiperDouble';
import useCheckMobileScreen from '../../lib/hooks/useCheckMobileScreen';
import PersonData from '../ui/personData/PersonData';
import { ProjectVintageTypes } from './type';
import ImageTextDesMobWrapper from './imageTextDesMobWrapper/ImageTextDesMobWrapper';
import styles from './vintage.module.scss';

const ProjectVintage = (props: ProjectVintageTypes) => {
  const {
    imageTextWithFlexVintage,
    imageTextWithFlexVintage_1,
    textWithTitleVintage,
    imageTextVintageDesMob,
    textWithTitleVintage_1,
    textWithTitleVintage_2,
    imageBackground,
    personDataVintage,
    imageTextVintage_1,
    imageTextVintage_2,
    imageTextVintageDesMobWrapper_1,
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
      <PersonData {...personDataVintage} />
      <ImageTextSimple {...imageTextVintage_1} />
      <ImageTextSwiperDouble {...imageTextVintage_2} />
      <ImageTextDesMobWrapper {...imageTextVintageDesMobWrapper_1} />
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
