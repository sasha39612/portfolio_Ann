import { TitleTextImageGrid } from '../../../interfaces/common';
import ImageComponent from '../../ui/image/Image';
import styles from './titleArrayTextImage.module.scss';

const TitleArrayTextImage = ({ header, usersData }: TitleTextImageGrid) => {
  return (
    <section className={styles.wrapper}>
      <>
        <h2 className={styles[header.title?.className ?? '']}>
          {header.title?.text}
        </h2>
        <p className={styles[header.description?.className ?? '']}>
          {header.description?.text}
        </p>
      </>
      <ul className={styles.container}>
        {Array.isArray(usersData)
          ? usersData.map((item) => (
              <li
                key={item.id}
                className={styles[item?.classNameContainer ?? '']}
              >
                <p className={styles[item.textPart?.subTitle?.className ?? '']}>
                  {item.textPart?.subTitle?.text}
                </p>
                {Array.isArray(item?.textPart?.textGrid) ? (
                  <ul
                    className={
                      styles[
                        item?.textPart.classNameTextPartGridContainer ?? ''
                      ]
                    }
                  >
                    {item.textPart.textGrid.map((textBlock) => (
                      <li
                        key={textBlock.id}
                        className={styles[textBlock.classNameContainer ?? '']}
                      >
                        {textBlock?.title ? (
                          <h4
                            className={styles[textBlock.classNameTitle ?? '']}
                          >
                            {textBlock.title}
                          </h4>
                        ) : null}
                        {textBlock.image?.src ? (
                          <ImageComponent
                            {...textBlock.image}
                            className={styles[textBlock.image?.className ?? '']}
                          />
                        ) : null}
                        {Array.isArray(textBlock.description) ? (
                          <ul className={styles[textBlock?.className ?? '']}>
                            {textBlock.description.map(
                              (textBlockDescription) => (
                                <li key={textBlockDescription.id}>
                                  <span
                                    className={
                                      styles[
                                        textBlockDescription?.className ?? ''
                                      ]
                                    }
                                  >
                                    {textBlockDescription.text}
                                  </span>
                                </li>
                              ),
                            )}
                          </ul>
                        ) : (
                          <span className={styles[textBlock.description ?? '']}>
                            {textBlock.description}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                ) : null}
                <div className={styles[item.classNameImageWrapper ?? '']}>
                  {item.imagePart?.src ? (
                    <ImageComponent
                      {...item.imagePart}
                      className={styles[item.imagePart?.className ?? '']}
                    />
                  ) : null}
                </div>
              </li>
            ))
          : null}
      </ul>
    </section>
  );
};

export default TitleArrayTextImage;
