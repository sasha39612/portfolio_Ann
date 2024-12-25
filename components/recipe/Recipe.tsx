'use client';
import FooterProject from '../shared/footerProject/FooterProject';
import { ProjectRecipeTypes } from './type';
import TextImageWithFlex from '../textImageWithFlex/TextImageWithFlex';
import styles from './recipe.module.scss';
import ImageTextDesMob from '../ui/imageTextDesMob/ImageTextDesMob';
import ImageTextBlocksWithTitle from '../ui/imageTextBlocksWithTitle/ImageTextBlocksWithTitle';
import TitleTextImagesFlex from './titleTextImagesFlex/TitleTextImagesFlex';
import TitleTextImageGrid from './titleTextImageGrid/TitleTextImageGrid';

const ProjectRecipe = (props: ProjectRecipeTypes) => {
  const {
    imageTextWithFlexRecipe,
    imageTextWithTitleRecipe,
    imageTextRecipeDesMob,
    imagesTextWithTitleRecipe,
    titleTextImageGridRecipe,
    footerProject,
  } = props;

  return (
    <>
      <TextImageWithFlex {...imageTextWithFlexRecipe} />
      <ImageTextDesMob {...imageTextRecipeDesMob} />
      <ImageTextBlocksWithTitle imageTextWithTitle={imageTextWithTitleRecipe} />
      <TitleTextImagesFlex {...imagesTextWithTitleRecipe} />
      <TitleTextImageGrid titleTextImageGridRecipe={titleTextImageGridRecipe} />
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
