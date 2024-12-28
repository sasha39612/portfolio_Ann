import { ImageProps as NextImagePropsType } from 'next/legacy/image';

export interface ImagePropsType extends NextImagePropsType {
  src: string;
  alt: string;
  id?: string;
  width?: number;
  height?: number;
  placeholder?: 'blur' | 'empty';
  className?: string;
  imageClassName?: string;
  objectFit?: 'contain' | 'cover' | 'fill';
}

export interface TextBlockElem {
  id?: string;
  text?: string;
  image?: ImagePropsType;
  className?: string;
  popupContent?: ImagePropsType[];
  isDangerousHTML?: boolean;
}

export interface TextBlockElemArr {
  id: string;
  className?: string;
  text?: string;
  image?: ImagePropsType;
  popupContent?: ImagePropsType[];
}

export interface TextBlock {
  id?: string;
  title?: TextBlockElem;
  subTitle?: TextBlockElem;
  description?: TextBlockElem | TextBlockElemArr[];
  button?: TextBlockElem;
  link?: { href: string };
  container?: TextBlockElem;
  image?: ImagePropsType;
  popupContent?: ImagePropsType[];
  className?: string;
}

export interface TextSimpleBlock {
  id?: string;
  title?: string;
  subTitle?: string;
  description?: string;
  className?: string;
  classNameContainer?: string;
  classNameTitle?: string;
  classNameSubTitle?: string;
  classNameDescription?: string;
  isDangerousHTML?: boolean;
}

export interface ImageTextSimpleBlock extends TextSimpleBlock {
  image?: ImagePropsType;
}

export interface TextBlockWithFlex {
  id?: string;
  title?: TextBlockElem;
  subTitle?: TextBlockElem;
  description?: TextBlockElem;
  textGrid: Array<TextSimpleBlock>;
  className?: string;
  classNameTextPartGridContainer?: string;
  classNameGridContainer?: string;
}

export interface TextImageType {
  id: string;
  isProject?: boolean;
  isReverse?: boolean;
  projectName?: string;
  textPart?: TextBlock;
  imagePart?: ImagePropsType;
  className?: string;
  container?: TextBlockElem;
}

export interface TextImageWithFlexType {
  id: string;
  textPart?: TextBlockWithFlex;
  imagePart?: ImagePropsType;
  className?: string;
  classNameContainer?: string;
  classNameContainerTextPart?: string;
  classNameContainerTextPartDescription?: string;
  classNameTextGridWrapper?: string;
}

export interface AboutType {
  textImageProps: TextImageType;
  educationBlock: TextBlock[];
  skillsBlock: TextBlock;
  programsBlock: { title: TextBlockElem; images: ImagePropsType[] };
}

export interface contactInputType {
  name: string;
  placeHolder: string;
}

export interface ContactType {
  contactTitle: string;
  contactDescription: string;
  inputName: contactInputType;
  inputEmail: contactInputType;
  inputMessage: contactInputType;
  button: TextBlockElem;
}

export interface FooterProject {
  title: string;
  className: string;
  classNameContainer: string;
  imageArrowLeftName: string;
  imageArrowRightName: string;
  imageArrowLeftHref: string;
  imageArrowRightHref: string;
  imageArrowLeft: ImagePropsType;
  imageArrowRight: ImagePropsType;
}

export interface TextPartType {
  id: string;
  title: string;
  subTitle: string;
  description: string;
  classNameSubTitle: string;
  classNameTitle: string;
  classNameDescription: string;
}

export interface ImageTextDesMobType {
  textPart: TextPartType;
  className?: string;
  classNameTextContainer: string;
  imagePartDesktop?: ImagePropsType;
  imagePartMobile?: ImagePropsType;
  imagePartDesktopSlider?: ImagePropsType[];
  imagePartMobileSlider?: ImagePropsType[];
}

export interface ImageTextDesMobTypeWrapper {
  title: string;
  classNameTitle: string;
  classNameWrapper: string;
  classNameContainer: string;
  imageTextVintageDesMob: ImageTextDesMobType & { id: string };
}

export interface PersonDataType {
  textPart: {
    title: { text: string; className: string };
    mainInfo: TextBlock[];
    additionalInfo: TextBlock;
    attachment: TextBlock[];
    classNameContainer: string;
    classNameAttachmentsContainer: string;
    classNameAttachmentContainer: string;
  };
  imagePart: ImagePropsType;
  className?: string;
  classNameContainer: string;
}

export interface ImagePartMobileSliders {
  imagePartMobileSlider: ImagePropsType[];
  id: string;
  subTitle?: { text: string; className: string };
}

export interface ImagePartDesktopSliders {
  imagePartDesktopSlider: ImagePropsType[];
  id: string;
  subTitle?: { text: string; className: string };
  className?: string;
}

export interface ImageText {
  textPart: {
    id: string;
    title: string;
    description: string;
    classNameTitle: string;
    classNameDescription: string;
  };
  imagePartDesktop?: ImagePropsType;
  imagePartMobile?: ImagePropsType;
  imagePartMobileSliders?: ImagePartMobileSliders;
  imagePartDesktopSliders?: ImagePartDesktopSliders[];
  imagePartDesktopSlider?: ImagePropsType[];
  className?: string;
  classNameContainer?: string;
  classNameImageContainer?: string;
  classNameSwiperWrapper?: string;
}

export interface DesktopMultiType {
  imagePartDesktopSliders: ImagePartDesktopSliders[];
  className: string;
}

export interface TextBlockListFlexType {
  textGrid: TextSimpleBlock[];
  className?: string;
  classNameContainer?: string;
}

export interface TitleTextImagesFlexType {
  textPart: TextPartType;
  imagesWithTitleList: ImageTextSimpleBlock[];
}

export interface TextBlockUserData
  extends Omit<TextSimpleBlock, 'description'> {
  description: TextBlockElem | TextBlockElem[];
}

export interface UserData extends TextImageWithFlexType {
  textGrid: TextBlockUserData[];
  classNameImageWrapper?: string;
  classNameTextPartGridContainer?: string;
  imagePart?: ImagePropsType;
}

export interface TitleTextImageGrid {
  header: {
    title: TextBlockElem;
    description: TextBlockElem;
    image?: ImagePropsType;
  };
  usersData: UserData | UserData[];
}
