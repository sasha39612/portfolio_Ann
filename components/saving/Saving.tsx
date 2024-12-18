'use client';
import TextImage from '../textImage/TextImage';
import TextImageWithFlex from '../textImageWithGrid/TextImageWithFlex';
import { ProjectSavingTypes } from './type';
import ImageTextSaving_4 from './imageTextSaving_4/ImageTextSaving_4';
import ImageTextSaving_3 from './imageTextSaving_3/ImageTextSaving_3';
import ImageTextSaving_2 from './imageTextSaving_2/ImageTextSaving_2';
import ImageTextSaving_1 from './imageTextSaving_1/ImageTextSaving_1';
import TextBlockWithTitle from './textBlockWithTitle/TextBlockWithTitle';
import TextBlockWithoutTitle from './textBlockWithoutTitle/TextBlockWithoutTitle';
import ImageTextSaving_5 from './imageTextSaving_5/ImageTextSaving_5';
import ImageTextSaving_6 from './imageTextSaving_6/ImageTextSaving_6';
import ImageTextSaving_7 from './imageTextSaving_7/ImageTextSaving_7';
import ImageTextSaving_8 from './imageTextSaving_8/ImageTextSaving_8';
import ImageTextSaving_9 from './imageTextSaving_9/ImageTextSaving_9';
import ImageTextSaving_10 from './imageTextSaving_10/ImageTextSaving_10';

const ProjectSaving = (props: ProjectSavingTypes) => {
  const {
    imageTextSaving,
    imageTextWithFlexSaving,
    textWithTitleSaving,
    textWithoutTitleSaving,
    imageTextSaving_1,
    imageTextSaving_2,
    imageTextSaving_3,
    imageTextSaving_4,
    imageTextSaving_5,
    imageTextSaving_6,
    imageTextSaving_7,
    imageTextSaving_8,
    imageTextSaving_9,
    imageTextSaving_10,
  } = props;

  return (
    <>
      <TextImage {...imageTextSaving} />
      <TextImageWithFlex {...imageTextWithFlexSaving} />
      <TextBlockWithTitle textWithTitleSaving={textWithTitleSaving} />
      <TextBlockWithoutTitle textWithoutTitleSaving={textWithoutTitleSaving} />
      <ImageTextSaving_1 {...imageTextSaving_1} />
      <ImageTextSaving_2 {...imageTextSaving_2} />
      <ImageTextSaving_3 {...imageTextSaving_3} />
      <ImageTextSaving_4 {...imageTextSaving_4} />
      <ImageTextSaving_5 {...imageTextSaving_5} />
      <ImageTextSaving_6 {...imageTextSaving_6} />
      <ImageTextSaving_7 {...imageTextSaving_7} />
      <ImageTextSaving_8 {...imageTextSaving_8} />
      <ImageTextSaving_9 {...imageTextSaving_9} />
      <ImageTextSaving_10 {...imageTextSaving_10} />
    </>
  );
};

export default ProjectSaving;
