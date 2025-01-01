import {
  FooterProject,
  ImageText,
  ImageTextDesMobType,
  ImageTextSimpleBlock,
  TextImageWithFlexType,
  TitleTextImageGrid,
} from '../../interfaces/common';
import { TitleTextImageDesMobType } from '../recipe/type';

export interface ProjectLiteraryTypes {
  imageTextWithFlexLiterary: TextImageWithFlexType;
  imageTextLiteraryDesMob: ImageTextDesMobType;
  imageTextWithTitleLiterary: ImageTextSimpleBlock[];
  titleTextImageGridLiterary_1: TitleTextImageGrid;
  titleTextImageGridLiterary_2: TitleTextImageGrid;
  imageTextLiterary_2: ImageText;
  imageTextLiterary_3: ImageText;
  titleImagesLiterary: ImageText;
  titleTextImageDesMobLiterary: TitleTextImageDesMobType;
  imageTextLiterary_4: ImageText;
  imageTextLiterary_5: ImageText;
  titleTextImageGridLiterary: TitleTextImageGrid;
  footerProject: FooterProject;
}
