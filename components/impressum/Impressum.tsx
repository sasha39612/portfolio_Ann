import { ImpressumType } from '../../interfaces/common';
import { getDangerousHTML } from '../../lib/getDangerousHTML';
import styles from './impressum.module.scss';

const ImpressumComponent = ({
  firstTextBlock,
  secondTextBlock,
}: ImpressumType) => {
  return (
    <>
      <h2 className={styles[firstTextBlock?.title?.className ?? '']}>
        {firstTextBlock?.title?.text}
      </h2>
      <ul className={styles.firstTextBlockDescriptionWrapper}>
        {Array.isArray(firstTextBlock.description)
          ? firstTextBlock.description.map((description) => (
              <li
                key={description.id}
                className={styles[description.className ?? '']}
              >
                {description.text}
              </li>
            ))
          : null}
      </ul>
      <h3 className={styles[secondTextBlock?.title?.className ?? '']}>
        {secondTextBlock?.title?.text}
      </h3>
      <ul className={styles.secondTextBlockDescriptionWrapper}>
        {Array.isArray(secondTextBlock.textBlocksList)
          ? secondTextBlock.textBlocksList.map((textBlock) => (
              <li key={textBlock.id}>
                <h4 className={styles[textBlock.subTitle?.className ?? '']}>
                  {textBlock.subTitle?.text}
                </h4>
                {!Array.isArray(textBlock.description) ? (
                  textBlock?.description?.isDangerousHTML &&
                  textBlock.description?.text ? (
                    <p
                      className={styles[textBlock.description?.className ?? '']}
                      dangerouslySetInnerHTML={getDangerousHTML(
                        textBlock.description?.text,
                      )}
                    />
                  ) : (
                    <p
                      className={styles[textBlock.description?.className ?? '']}
                    >
                      {textBlock.description?.text}
                    </p>
                  )
                ) : null}
              </li>
            ))
          : null}
      </ul>
    </>
  );
};

export default ImpressumComponent;
