'use client';
import FooterProject from '../shared/footerProject/FooterProject';
import { ProjectRecipeTypes } from './type';
import TextImageWithFlex from '../textImageWithFlex/TextImageWithFlex';
import styles from './recipe.module.scss';
import ImageTextDesMob from '../ui/imageTextDesMob/ImageTextDesMob';
import ImageTextBlocksWithTitle from '../ui/imageTextBlocksWithTitle/ImageTextBlocksWithTitle';
import TitleTextImagesFlex from './titleTextImagesFlex/TitleTextImagesFlex';
import TitleTextImageGrid from './titleTextImageGrid/TitleTextImageGrid';
import TextBlocksWithTitle from '../ui/textBlocksWithTitle/TextBlocksWithTitle';
import TitleArrayTextImageGrid from './titleArrayTextImageGrid/TitleArrayTextImageGrid';
import TitleArrayTextImage from './titleArrayTextImage/TitleArrayTextImage';
import ImageTextRecipe from './imageTextRecipe/ImageTextRecipe';
import TitleTextImageDesMob from './titleTextImageDesMob/TitleTextImageDesMob';

const ProjectRecipe = (props: ProjectRecipeTypes) => {
  const {
    imageTextWithFlexRecipe,
    imageTextWithTitleRecipe,
    imageTextRecipeDesMob,
    imagesTextWithTitleRecipe,
    titleTextImageGridRecipe,
    imageTextWithFlexRecipe_1,
    imageTextWithFlexRecipe_2,
    textWithTitleRecipe_2,
    titleTextImageGridRecipe_1,
    titleTextImageGridRecipe_2,
    imageTextRecipe,
    titleTextImageDesMob,
    footerProject,
  } = props;

  return (
    <>
      <TextImageWithFlex {...imageTextWithFlexRecipe} />
      <ImageTextDesMob {...imageTextRecipeDesMob} />
      <ImageTextBlocksWithTitle imageTextWithTitle={imageTextWithTitleRecipe} />
      <TitleTextImagesFlex {...imagesTextWithTitleRecipe} />
      <TitleTextImageGrid titleTextImageGridRecipe={titleTextImageGridRecipe} />
      <TextImageWithFlex {...imageTextWithFlexRecipe_1} />
      <TextImageWithFlex {...imageTextWithFlexRecipe_2} />
      <TextBlocksWithTitle {...textWithTitleRecipe_2} />
      <TitleArrayTextImageGrid {...titleTextImageGridRecipe_1} />
      <TitleArrayTextImage {...titleTextImageGridRecipe_2} />
      <ImageTextRecipe {...imageTextRecipe} />
      <TitleTextImageDesMob {...titleTextImageDesMob} />
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
