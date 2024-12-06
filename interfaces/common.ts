import { ImageProps as NextImagePropsType } from "next/legacy/image";

export interface ImagePropsType extends NextImagePropsType {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    placeholder?: 'blur' | 'empty';
    className?: string;
    imageClassName?: string;
    objectFit?: 'contain' | 'cover' | 'fill';
}

export interface TextBlockElem {
  className: string;
  text: string;
}

export interface TextBlock {
  title?: TextBlockElem;
  subTitle?: TextBlockElem;
  description?: TextBlockElem;
  button?: TextBlockElem;
  image?: ImagePropsType;
}

export interface TextImageType {
  id: string;
  isProject?: boolean;
  isReverse?: boolean;
  projectName: string;
  textPart: TextBlock,
  imagePart: ImagePropsType;
}
