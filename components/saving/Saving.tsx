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
    </>
  );
};

export default ProjectSaving;
