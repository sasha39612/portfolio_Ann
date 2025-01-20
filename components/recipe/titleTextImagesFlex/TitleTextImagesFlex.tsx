import { TitleTextImagesFlexType } from '../../../interfaces/common';
import styles from './titleTextImagesFlex.module.scss';
import ImageTextBlocksWithTitle from '../../ui/imageTextBlocksWithTitle/ImageTextBlocksWithTitle';

const TitleTextImagesFlex = ({
  textPart,
  imagesWithTitleList,
}: TitleTextImagesFlexType) => {
  return (
    <section>
      <h2 className={styles[textPart.classNameTitle ?? '']}>
        {textPart.title}
      </h2>
      <div className={styles[textPart.classNameSubTitle ?? '']}>
        {textPart.subTitle}
      </div>
      <div className={styles[textPart.classNameDescription ?? '']}>
        {textPart.description}
      </div>
      <ImageTextBlocksWithTitle imageTextWithTitle={imagesWithTitleList} />
    </section>
  );
};

export default TitleTextImagesFlex;
