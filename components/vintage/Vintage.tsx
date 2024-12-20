'use client';
import styles from './vintage.module.scss';
import { ProjectVintageTypes } from './type';
import FooterProject from '../shared/footerProject/FooterProject';
import TextBlock from './textBlock/TextBlock';
import TextImageWithFlex from '../textImageWithFlex/TextImageWithFlex';
import TextBlockWithTitle from '../ui/textBlockWithTitle/TextBlockWithTitle';

const ProjectVintage = (props: ProjectVintageTypes) => {
  const {
    imageTextWithFlexVintage,
    imageTextWithFlexVintage_1,
    textWithTitleVintage,
    imageTextVintage_13,
    footerProject,
  } = props;

  return (
    <>
      <TextImageWithFlex {...imageTextWithFlexVintage} />
      <TextImageWithFlex {...imageTextWithFlexVintage_1} />
      <TextBlockWithTitle textWithTitle={textWithTitleVintage} />
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
