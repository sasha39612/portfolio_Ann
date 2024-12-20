'use client';
import styles from './vintage.module.scss';
import { ProjectVintageTypes } from './type';
import FooterProject from '../shared/footerProject/FooterProject';
import TextBlock from './textBlock/TextBlock';
import TextImageWithFlex from '../textImageWithFlex/TextImageWithFlex';

const ProjectVintage = (props: ProjectVintageTypes) => {
  const { imageTextWithFlexVintage, imageTextVintage_13, footerProject } =
    props;

  return (
    <>
      <TextImageWithFlex {...imageTextWithFlexVintage} />
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
