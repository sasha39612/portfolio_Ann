'use client';
import Text from '../text/Text';
import { TextSimpleBlock } from '../../../interfaces/common';
import styles from './textBlockWithTitle.module.scss';

const TextBlockWithTitle = ({
  textWithTitle,
}: {
  textWithTitle: TextSimpleBlock[];
}) => {
  return (
    <ul className={styles[textWithTitle[0]?.className ?? '']}>
      {Array.isArray(textWithTitle)
        ? textWithTitle.map((item) => (
            <li key={item.id} className={styles[item.classNameContainer ?? '']}>
              <Text
                {...item}
                classNameTitle={styles[item.classNameTitle ?? '']}
                classNameDescription={styles[item.classNameDescription ?? '']}
              />
            </li>
          ))
        : null}
    </ul>
  );
};

export default TextBlockWithTitle;
