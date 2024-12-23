'use client';
import FooterProject from '../shared/footerProject/FooterProject';
import { ProjectRecipeTypes } from './type';
import TextImageWithFlex from '../textImageWithFlex/TextImageWithFlex';
import styles from './recipe.module.scss';

const ProjectRecipe = (props: ProjectRecipeTypes) => {
  const { imageTextWithFlexRecipe, footerProject } = props;

  return (
    <>
      <TextImageWithFlex {...imageTextWithFlexRecipe} />
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

export default ProjectRecipe;
