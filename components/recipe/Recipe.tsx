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
import TitleImageTextImage from './titleImageTextImage/TitleImageTextImage';
import ImageTextBeforeAfter from '../ui/imageTextBeforeAfter/ImageTextBeforeAfter';
import TitleImageText from './titleImageText/TitleImageText';
import ImageTextSwiperMulti from '../ui/imageTextSwiperMulti/ImageTextSwiperMulti';
import ImagesMulti from '../ui/imagesMulti/ImagesMulti';

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
    titleTextImageGridRecipe_3,
    textWithTitleRecipe_3,
    imageTextRecipe_2,
    imagesMulti,
    imageTextSwiperMultiRecipe,
    imageTextWithFlexRecipe_3,
    titleTextImageGridRecipe_4,
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
      <TitleImageTextImage {...titleTextImageGridRecipe_3} />
      <TextBlocksWithTitle {...textWithTitleRecipe_3} />
      <ImageTextBeforeAfter {...imageTextRecipe_2} />
      <ImagesMulti images={imagesMulti} />
      <ImageTextSwiperMulti {...imageTextSwiperMultiRecipe} />
      <TitleImageText {...imageTextWithFlexRecipe_3} />
      <TitleImageTextImage {...titleTextImageGridRecipe_4} />
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
