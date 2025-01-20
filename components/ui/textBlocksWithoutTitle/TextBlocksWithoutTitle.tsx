'use client';
import Text from '../text/Text';
import { TextSimpleBlock } from '../../../interfaces/common';
import styles from './textBlocksWithoutTitle.module.scss';

const TextBlocksWithoutTitle = ({
  textWithoutTitle,
}: {
  textWithoutTitle: TextSimpleBlock[];
}) => {
  return (
    <ul className={styles[textWithoutTitle[0]?.className ?? '']}>
      {Array.isArray(textWithoutTitle)
        ? textWithoutTitle.map((item) => (
            <li key={item.id} className={styles[item.classNameContainer ?? '']}>
              <Text
                {...item}
                classNameDescription={styles[item.classNameDescription ?? '']}
              />
            </li>
          ))
        : null}
    </ul>
  );
};

export default TextBlocksWithoutTitle;
