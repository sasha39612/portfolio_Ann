'use client';
import Text from '../text/Text';
import { TextBlockElem, TextSimpleBlock } from '../../../interfaces/common';
import styles from './textBlocksWithTitle.module.scss';

const TextBlocksWithTitle = ({
  title,
  textWithTitle,
}: {
  title?: TextBlockElem;
  textWithTitle: TextSimpleBlock[];
}) => {
  return (
    <section>
      <p className={styles[title?.className ?? '']}>{title?.text}</p>
      <ul className={styles[textWithTitle[0]?.className ?? '']}>
        {Array.isArray(textWithTitle)
          ? textWithTitle.map((item) => (
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
    </section>
  );
};

export default TextBlocksWithTitle;
