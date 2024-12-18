'use client';
import TextImage from '../textImage/TextImage';
import useCheckMobileScreen from '../../lib/hooks/useCheckMobileScreen';
import TextImageWithFlex from '../textImageWithGrid/TextImageWithFlex';
import SwiperCustom from '../ui/swiper/Swiper';
import Text from '../ui/text/Text';
import { ProjectSavingTypes } from './type';
import styles from './saving.module.scss';
import ImageComponent from '../ui/image/Image';

const ProjectSaving = (props: ProjectSavingTypes) => {
  const {
    imageTextSaving,
    imageTextWithFlexSaving,
    textWithTitleSaving,
    textWithoutTitleSaving,
    imageTextSaving_1,
    imageTextSaving_2,
  } = props;
  const isMobileView = useCheckMobileScreen();

  return (
    <>
      <TextImage {...imageTextSaving} />
      <TextImageWithFlex {...imageTextWithFlexSaving} />
      <ul className={styles.wrapperWithTitle}>
        {Array.isArray(textWithTitleSaving)
          ? textWithTitleSaving.map((item) => (
              <Text
                key={item.id}
                {...item}
                classNameContainer={styles[item.classNameContainer ?? '']}
                classNameTitle={styles[item.classNameTitle ?? '']}
                classNameDescription={styles[item.classNameDescription ?? '']}
              />
            ))
          : null}
      </ul>
      <ul className={styles.wrapperWithoutTitle}>
        {Array.isArray(textWithoutTitleSaving)
          ? textWithoutTitleSaving.map((item) => (
              <Text
                key={item.id}
                {...item}
                classNameContainer={styles[item.classNameContainer ?? '']}
                classNameDescription={styles[item.classNameDescription ?? '']}
              />
            ))
          : null}
      </ul>
      <>
        <Text
          id={imageTextSaving_1.textPart.id}
          classNameContainer={styles.containerImageTextSaving_1}
          title={imageTextSaving_1.textPart.title}
          classNameTitle={
            styles[imageTextSaving_1.textPart.classNameTitle ?? '']
          }
          description={imageTextSaving_1.textPart.description}
          classNameDescription={
            styles[imageTextSaving_1.textPart.classNameDescription ?? '']
          }
        />
        {isMobileView ? (
          <ImageComponent
            {...imageTextSaving_1.imagePartMobile}
            className={
              styles[imageTextSaving_1.imagePartMobile?.className ?? '']
            }
          />
        ) : (
          <ImageComponent
            {...imageTextSaving_1.imagePartDesktop}
            className={
              styles[imageTextSaving_1.imagePartDesktop.className ?? '']
            }
          />
        )}
      </>
      <>
        <Text
          id={imageTextSaving_2.textPart.id}
          classNameContainer={styles.containerImageTextSaving_1}
          title={imageTextSaving_2.textPart.title}
          classNameTitle={
            styles[imageTextSaving_2.textPart.classNameTitle ?? '']
          }
          description={imageTextSaving_2.textPart.description}
          classNameDescription={
            styles[imageTextSaving_2.textPart.classNameDescription ?? '']
          }
        />
        {isMobileView &&
        Array.isArray(imageTextSaving_2.imagePartMobileSlider) ? (
          <SwiperCustom
            images={imageTextSaving_2.imagePartMobileSlider}
            classNameSwiper={styles.swiper}
            classNameImage={
              styles[
                imageTextSaving_2.imagePartMobileSlider?.[0].className ?? ' '
              ]
            }
          />
        ) : (
          <ImageComponent
            {...imageTextSaving_2.imagePartDesktop}
            className={
              styles[imageTextSaving_2.imagePartDesktop.className ?? '']
            }
          />
        )}
      </>
    </>
  );
};

export default ProjectSaving;
