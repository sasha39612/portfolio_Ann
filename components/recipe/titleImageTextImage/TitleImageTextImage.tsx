import { TitleTextImageGrid } from '../../../interfaces/common';
import ImageComponent from '../../ui/image/Image';
import styles from './titleImageTextImage.module.scss';

const TitleImageTextImage = ({ header, usersData }: TitleTextImageGrid) => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.headerContainer}>
        <h2 className={styles[header.title.className ?? '']}>
          {header.title?.text}
        </h2>
        {header.image?.src ? (
          <ImageComponent
            {...header.image}
            className={styles[header.image.className ?? '']}
          />
        ) : null}
      </div>

      {!Array.isArray(usersData) ? (
        <>
          <ul
            className={styles[usersData?.classNameTextPartGridContainer ?? '']}
          >
            {Array.isArray(usersData.textGrid) &&
              usersData.textGrid.map((textBlock) => (
                <li
                  key={textBlock.id}
                  className={styles[textBlock.classNameContainer ?? '']}
                >
                  <h4 className={styles[textBlock.classNameTitle ?? '']}>
                    {textBlock.title}
                  </h4>
                  {Array.isArray(textBlock.description) ? (
                    <ul className={styles[textBlock.className ?? '']}>
                      {textBlock.description.map((textBlockDescription) => (
                        <li key={textBlockDescription.id}>
                          <span
                            className={
                              styles[textBlockDescription.className ?? '']
                            }
                          >
                            {textBlockDescription.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <span
                      className={styles[textBlock.classNameDescription ?? '']}
                    >
                      {textBlock?.description.text}
                    </span>
                  )}
                </li>
              ))}
          </ul>
          {usersData.imagePart?.src ? (
            <ImageComponent
              {...usersData.imagePart}
              className={styles[usersData.imagePart?.className ?? '']}
            />
          ) : null}
        </>
      ) : null}
    </section>
  );
};

export default TitleImageTextImage;
