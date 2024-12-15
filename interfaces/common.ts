import { ImageProps as NextImagePropsType } from "next/legacy/image";

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
  className?: string;
  text?: string;
  image?: ImagePropsType;
  popupContent?: ImagePropsType[];
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
}

export interface TextImageType {
  id: string;
  isProject?: boolean;
  isReverse?: boolean;
  projectName?: string;
  textPart?: TextBlock,
  imagePart?: ImagePropsType;
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
