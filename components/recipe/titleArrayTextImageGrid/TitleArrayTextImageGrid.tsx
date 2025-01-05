import { TitleTextImageGrid } from '../../../interfaces/common';
import ImageComponent from '../../ui/image/Image';
import Text from '../../ui/text/Text';
import TextBlockListFlex from '../../ui/textBlockListFlex/TextBlockListFlex';
import styles from './titleArrayTextImageGrid.module.scss';

const TitleArrayTextImageGrid = ({ header, usersData }: TitleTextImageGrid) => {
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
                className={styles[item.classNameContainer ?? '']}
              >
                <>
                  {item.imagePart?.src ? (
                    <ImageComponent
                      {...item.imagePart}
                      className={styles[item.imagePart?.className ?? '']}
                    />
                  ) : null}
                  <div
                    className={styles[item.classNameContainerTextPart ?? '']}
                  >
                    <Text
                      subTitle={item.textPart?.subTitle?.text}
                      classNameSubTitle={
                        styles[item.textPart?.subTitle?.className ?? '']
                      }
                      id={item.textPart?.subTitle?.text}
                    />

                    {Array.isArray(item.textPart?.textGrid) ? (
                      <TextBlockListFlex
                        textGrid={item.textPart?.textGrid}
                        classNameContainer={
                          item.textPart.classNameGridContainer
                        }
                        className={
                          item.textPart?.classNameTextPartGridContainer
                        }
                      />
                    ) : null}
                  </div>
                </>
                {Array.isArray(item?.textGrid) ? (
                  <ul className={styles[item.classNameTextGridWrapper ?? '']}>
                    {item.textGrid.map((textBlock) => (
                      <li
                        key={textBlock.id}
                        className={styles[textBlock?.classNameContainer ?? '']}
                      >
                        <h4 className={styles[textBlock.classNameTitle ?? '']}>
                          {textBlock.title}
                        </h4>
                        {Array.isArray(textBlock.description) ? (
                          <ul
                            className={
                              styles[
                                item.classNameContainerTextPartDescription ?? ''
                              ]
                            }
                          >
                            {textBlock.description.map(
                              (textBlockDescription) => (
                                <li key={textBlockDescription.id}>
                                  <span
                                    className={
                                      styles[
                                        textBlockDescription.className ?? ''
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
                          <span
                            className={
                              styles[textBlock.description.className ?? '']
                            }
                          >
                            {textBlock.description.text}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))
          : null}
      </ul>
    </section>
  );
};

export default TitleArrayTextImageGrid;
