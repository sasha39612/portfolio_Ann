'use client';
import TextImage from '../textImage/TextImage';
import TextImageWithFlex from '../textImageWithFlex/TextImageWithFlex';
import { ProjectSavingTypes } from './type';
import ImageTextSaving_4 from './imageTextSaving_4/ImageTextSaving_4';
import ImageTextSaving_3 from './imageTextSaving_3/ImageTextSaving_3';
import ImageTextSaving_2 from './imageTextSaving_2/ImageTextSaving_2';
import TextBlocksWithTitle from '../ui/textBlocksWithTitle/TextBlocksWithTitle';
import ImageTextSaving_5 from './imageTextSaving_5/ImageTextSaving_5';
import ImageTextSaving_6 from './imageTextSaving_6/ImageTextSaving_6';
import ImageTextSaving_7 from './imageTextSaving_7/ImageTextSaving_7';
import ImageTextBeforeAfter from '../ui/imageTextBeforeAfter/ImageTextBeforeAfter';
import ImageTextSaving_9 from './imageTextSaving_9/ImageTextSaving_9';
import ImageTextSaving_10 from './imageTextSaving_10/ImageTextSaving_10';
import ImageTextSaving_11 from './imageTextSaving_11/ImageTextSaving_11';
import ImageTextSaving_12 from './imageTextSaving_12/ImageTextSaving_12';
import TextBlock from './textBlock/TextBlock';
import FooterProject from '../shared/footerProject/FooterProject';
import TextBlocksWithoutTitle from '../ui/textBlocksWithoutTitle/TextBlocksWithoutTitle';
import ImageTextSimple from '../ui/imageTextSimple/ImageTextSimple';
import styles from './saving.module.scss';

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
    imagePartMobileSlider,
    imageTextSaving_11,
    imageTextSaving_12,
    imageTextSaving_13,
    footerProject,
  } = props;

  return (
    <>
      <TextImage {...imageTextSaving} />
      <TextImageWithFlex {...imageTextWithFlexSaving} />
      <TextBlocksWithTitle {...textWithTitleSaving} />
      <TextBlocksWithoutTitle textWithoutTitle={textWithoutTitleSaving} />
      <ImageTextSimple {...imageTextSaving_1} />
      <ImageTextSaving_2 {...imageTextSaving_2} />
      <ImageTextSaving_3 {...imageTextSaving_3} />
      <ImageTextSaving_4 {...imageTextSaving_4} />
      <ImageTextSaving_5 {...imageTextSaving_5} />
      <ImageTextSaving_6 {...imageTextSaving_6} />
      <ImageTextSaving_7 {...imageTextSaving_7} />
      <ImageTextBeforeAfter {...imageTextSaving_8} />
      <ImageTextSaving_9 {...imageTextSaving_9} />
      <ImageTextSaving_10 imagePartMobileSlider={imagePartMobileSlider} />
      <ImageTextSaving_11 {...imageTextSaving_11} />
      <ImageTextSaving_12 {...imageTextSaving_12} />
      <TextBlock textPart={imageTextSaving_13} />
      <FooterProject
        {...footerProject}
        className={styles[footerProject.className ?? ' ']}
        classNameTitle={styles.classNameTitle}
        classNameImage={''}
      />
    </>
  );
};

export default ProjectSaving;
