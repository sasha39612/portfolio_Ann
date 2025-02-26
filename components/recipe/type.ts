import {
  FooterProject,
  ImageTextSimpleBlock,
  ImageTextDesMobType,
  TextImageWithFlexType,
  TitleTextImagesFlexType,
  TextSimpleBlock,
  TextBlockElem,
  TitleTextImageGrid,
  ImageText,
  ImagePropsType,
  TitleImagesTextType,
  ImagesTextType,
} from '../../interfaces/common';

export interface TitleTextImageDesMobType {
  title: string;
  description: string;
  classNameTitle: string;
  classNameDescription: string;
  classNameWrapper: string;
  imageTextRecipeDesMob: ImageTextDesMobType;
}

export interface TextWithTitleRecipe {
  title: TextBlockElem;
  textWithTitle: TextSimpleBlock[];
}

export interface ProjectRecipeTypes {
  imageTextWithFlexRecipe: TextImageWithFlexType;
  imageTextRecipeDesMob: ImageTextDesMobType;
  imageTextWithTitleRecipe: ImageTextSimpleBlock[];
  imagesTextWithTitleRecipe: TitleTextImagesFlexType;
  titleTextImageGridRecipe: ImageTextSimpleBlock[];
  imageTextWithFlexRecipe_1: TextImageWithFlexType;
  imageTextWithFlexRecipe_2: TextImageWithFlexType;
  textWithTitleRecipe_2: TextWithTitleRecipe;
  titleTextImageGridRecipe_1: TitleTextImageGrid;
  titleTextImageGridRecipe_2: TitleTextImageGrid;
  imageTextRecipe: ImageText;
  titleTextImageDesMob: TitleTextImageDesMobType;
  titleTextImageGridRecipe_3: TitleTextImageGrid;
  textWithTitleRecipe_3: TextWithTitleRecipe;
  imageTextRecipe_2: ImageText;
  titleImagesTextRecipe: TitleImagesTextType;
  imagesMulti: ImagePropsType[];
  imagesTextRecipe: ImagesTextType;
  imageTextSwiperMultiRecipe: ImageText;
  imageTextWithFlexRecipe_3: TextImageWithFlexType;
  titleTextImageGridRecipe_4: TitleTextImageGrid;
  footerProject: FooterProject;
}
