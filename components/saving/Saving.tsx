'use client';
import TextImage from '../textImage/TextImage';
import useCheckMobileScreen from '../../lib/hooks/useCheckMobileScreen';
import TextImageWithFlex from '../textImageWithGrid/TextImageWithFlex';
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
  } = props;
  const isMobileView = useCheckMobileScreen();
  console.log('isMobileView', isMobileView);
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
            className={styles.imageTextSavingMobile_1}
          />
        ) : (
          <ImageComponent
            {...imageTextSaving_1.imagePartDesktop}
            className={styles.imageTextSavingDesktop_1}
          />
        )}
      </>
    </>
  );
};

export default ProjectSaving;
