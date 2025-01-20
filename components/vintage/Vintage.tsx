'use client';
import FooterProject from '../shared/footerProject/FooterProject';
import TextBlock from './textBlock/TextBlock';
import TextImageWithFlex from '../textImageWithFlex/TextImageWithFlex';
import TextBlocksWithTitle from '../ui/textBlocksWithTitle/TextBlocksWithTitle';
import ImageTextDesMob from '../ui/imageTextDesMob/ImageTextDesMob';
import ImageComponent from '../ui/image/Image';
import ImageTextSimple from '../ui/imageTextSimple/ImageTextSimple';
import ImageTextSwiperMulti from '../ui/imageTextSwiperMulti/ImageTextSwiperMulti';
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
    imageTextVintage_3,
    imageTextVintage_13,
    footerProject,
  } = props;
  const isMobileView = useCheckMobileScreen();
  const { imagePartMobile, imagePartDesktop } = imageBackground;

  return (
    <>
      <TextImageWithFlex {...imageTextWithFlexVintage} />
      <TextImageWithFlex {...imageTextWithFlexVintage_1} />
      <TextBlocksWithTitle {...textWithTitleVintage} />
      <ImageTextDesMob {...imageTextVintageDesMob} />
      <TextBlocksWithTitle {...textWithTitleVintage_1} />
      <TextBlocksWithTitle {...textWithTitleVintage_2} />
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
      <ImageTextSwiperMulti {...imageTextVintage_2} />
      <ImageTextDesMobWrapper {...imageTextVintageDesMobWrapper_1} />
      <ImageTextSwiperMulti {...imageTextVintage_3} />
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
