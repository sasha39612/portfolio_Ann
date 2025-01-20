import { ImageTextSimpleBlock } from '../../../interfaces/common';
import ImageComponent from '../../ui/image/Image';
import Text from '../../ui/text/Text';
import styles from './titleTextImageGrid.module.scss';

const TitleTextImageGrid = ({
  titleTextImageGridRecipe,
}: {
  titleTextImageGridRecipe: ImageTextSimpleBlock[];
}) => {
  return (
    <section>
      <ul className={styles.wrapper}>
        {Array.isArray(titleTextImageGridRecipe)
          ? titleTextImageGridRecipe.map((item) => (
              <li
                key={item.id}
                className={styles[item.classNameContainer ?? '']}
              >
                <Text
                  {...item}
                  classNameTitle={styles[item.classNameTitle ?? '']}
                  classNameDescription={styles[item.classNameDescription ?? '']}
                />
                {item.image?.src ? (
                  <ImageComponent
                    {...item.image}
                    className={styles[item.image?.className ?? '']}
                  />
                ) : null}
              </li>
            ))
          : null}
      </ul>
    </section>
  );
};

export default TitleTextImageGrid;
