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
    imageTextSaving_3,
  } = props;
  const isMobileView = useCheckMobileScreen();

  return (
    <>
      <TextImage {...imageTextSaving} />
      <TextImageWithFlex {...imageTextWithFlexSaving} />
      <ul className={styles.wrapperWithTitle}>
        {Array.isArray(textWithTitleSaving)
          ? textWithTitleSaving.map((item) => (
              <li
                key={item.id}
                className={styles[item.classNameContainer ?? '']}
              >
                <Text
                  {...item}
                  classNameTitle={styles[item.classNameTitle ?? '']}
                  classNameDescription={styles[item.classNameDescription ?? '']}
                />
              </li>
            ))
          : null}
      </ul>
      <ul className={styles.wrapperWithoutTitle}>
        {Array.isArray(textWithoutTitleSaving)
          ? textWithoutTitleSaving.map((item) => (
              <li
                key={item.id}
                className={styles[item.classNameContainer ?? '']}
              >
                <Text
                  {...item}
                  classNameDescription={styles[item.classNameDescription ?? '']}
                />
              </li>
            ))
          : null}
      </ul>
      <>
        <div className={styles.containerImageTextSaving_1}>
          <Text
            id={imageTextSaving_1.textPart.id}
            title={imageTextSaving_1.textPart.title}
            classNameTitle={
              styles[imageTextSaving_1.textPart.classNameTitle ?? '']
            }
            description={imageTextSaving_1.textPart.description}
            classNameDescription={
              styles[imageTextSaving_1.textPart.classNameDescription ?? '']
            }
          />
        </div>
        {imageTextSaving_1.imagePartDesktop?.src &&
        imageTextSaving_1.imagePartMobile?.src ? (
          <>
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
        ) : null}
      </>
      <>
        <div className={styles.containerImageTextSaving_1}>
          <Text
            id={imageTextSaving_2.textPart.id}
            title={imageTextSaving_2.textPart.title}
            classNameTitle={
              styles[imageTextSaving_2.textPart.classNameTitle ?? '']
            }
            description={imageTextSaving_2.textPart.description}
            classNameDescription={
              styles[imageTextSaving_2.textPart.classNameDescription ?? '']
            }
          />
        </div>
        {imageTextSaving_2.imagePartDesktop?.src &&
        imageTextSaving_2.imagePartMobileSlider?.length ? (
          <>
            {isMobileView ? (
              <SwiperCustom
                images={imageTextSaving_2.imagePartMobileSlider}
                classNameSwiper={styles.swiper}
                classNameImage={
                  styles[
                    imageTextSaving_2.imagePartMobileSlider?.[0].className ??
                      ' '
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
        ) : null}
      </>
      <>
        <div className={styles.containerImageTextSaving_1}>
          <Text
            id={imageTextSaving_3.textPart.id}
            title={imageTextSaving_3.textPart.title}
            classNameTitle={
              styles[imageTextSaving_1.textPart.classNameTitle ?? '']
            }
          />
        </div>
        {imageTextSaving_3.imagePartDesktopSlider?.length &&
        imageTextSaving_3.imagePartMobileSlider?.length ? (
          <>
            {isMobileView ? (
              <ImageComponent
                {...imageTextSaving_3.imagePartMobileSlider[0]}
                className={
                  styles[
                    imageTextSaving_3.imagePartMobileSlider[0]?.className ?? ''
                  ]
                }
              />
            ) : (
              <ImageComponent
                {...imageTextSaving_3.imagePartDesktopSlider[0]}
                className={
                  styles[
                    imageTextSaving_3.imagePartDesktopSlider[0].className ?? ''
                  ]
                }
              />
            )}
          </>
        ) : null}
        {imageTextSaving_3.imagePartDesktopSlider?.length &&
        imageTextSaving_3.imagePartMobileSlider?.length ? (
          <div className={styles.imageTextSaving_3TextImageWrapper}>
            <div className={styles.containerImageTextSaving_1}>
              <Text
                id={imageTextSaving_3.textPart.id}
                description={imageTextSaving_3.textPart.description}
                classNameDescription={
                  styles[imageTextSaving_1.textPart.classNameDescription ?? '']
                }
              />
            </div>
            {isMobileView ? (
              <>
                <ImageComponent
                  {...imageTextSaving_3.imagePartMobileSlider[1]}
                  className={
                    styles[
                      imageTextSaving_3.imagePartMobileSlider[1]?.className ??
                        ''
                    ]
                  }
                />
              </>
            ) : (
              <ImageComponent
                {...imageTextSaving_3.imagePartDesktopSlider[1]}
                className={
                  styles[
                    imageTextSaving_3.imagePartDesktopSlider[1].className ?? ''
                  ]
                }
              />
            )}
          </div>
        ) : null}
      </>
    </>
  );
};

export default ProjectSaving;
