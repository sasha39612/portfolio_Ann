import { DatenschutzType } from '../../interfaces/common';
import { getDangerousHTML } from '../../lib/getDangerousHTML';
import styles from './datenschutz.module.scss';

const DatenschutzComponent = ({
  titleTextBlock,
  firstTextBlock,
  secondTextBlock,
}: DatenschutzType) => {
  return (
    <>
      <h2 className={styles[titleTextBlock?.title?.className ?? '']}>
        {titleTextBlock?.title?.text}
      </h2>
      <h3>{titleTextBlock.subTitle?.text}</h3>
      <p className={styles[titleTextBlock.description?.className ?? '']}>
        {titleTextBlock.description.text}
      </p>
      {Array.isArray(firstTextBlock.description) ? (
        <ul className={styles.firstTextBlockDescriptionWrapper}>
          {firstTextBlock.description.map((description) => (
            <li
              key={description.id}
              className={styles[description.className ?? '']}
              dangerouslySetInnerHTML={getDangerousHTML(description.text)}
            />
          ))}
        </ul>
      ) : null}
      {Array.isArray(secondTextBlock.textBlocksList) ? (
        <ul className={styles.secondTextBlockWrapper}>
          {secondTextBlock.textBlocksList.map((textBlock) => (
            <li key={textBlock.id}>
              <h3 className={styles[textBlock.title?.className ?? '']}>
                {textBlock.title?.text}
              </h3>
              {Array.isArray(textBlock.textArr) ? (
                <ul className={styles.secondTextBlockTextBlocksListWrapper}>
                  {textBlock.textArr.map((textParagraph) => (
                    <li key={textParagraph.id}>
                      {textParagraph.paragraph?.text ? (
                        <p
                          className={
                            styles[textParagraph.paragraph?.className ?? '']
                          }
                          dangerouslySetInnerHTML={getDangerousHTML(
                            textParagraph.paragraph?.text,
                          )}
                        />
                      ) : null}
                      {Array.isArray(textParagraph.description) ? (
                        <ul
                          className={
                            styles.secondTextBlockTextBlocksListDescriptionWrapper
                          }
                        >
                          {textParagraph.description.map((description) => (
                            <li key={description.id}>
                              {description?.text ? (
                                <div
                                  className={
                                    styles[description?.className ?? '']
                                  }
                                  dangerouslySetInnerHTML={getDangerousHTML(
                                    description?.text,
                                  )}
                                />
                              ) : null}
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
};

export default DatenschutzComponent;
