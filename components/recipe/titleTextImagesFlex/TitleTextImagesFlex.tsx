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
      <h3 className={styles[textPart.classNameSubTitle ?? '']}>
        {textPart.subTitle}
      </h3>
      <div className={styles[textPart.classNameDescription ?? '']}>
        {textPart.description}
      </div>
      <ImageTextBlocksWithTitle imageTextWithTitle={imagesWithTitleList} />
    </section>
  );
};

export default TitleTextImagesFlex;
