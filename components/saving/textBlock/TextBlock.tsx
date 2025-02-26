'use client';
import { TextSimpleBlock } from '../../../interfaces/common';
import Text from '../../ui/text/Text';
import styles from './textBlock.module.scss';

const TextBlock = ({ textPart }: { textPart: TextSimpleBlock[] }) => {
  return (
    <>
      <h2 className={styles[textPart[0].classNameTitle ?? '']}>
        {textPart[0].title}
      </h2>
      <ul className={styles.textBlockWrapper}>
        {Array.isArray(textPart)
          ? textPart.map((item) => (
              <li
                key={item.id}
                className={styles[item.classNameContainer ?? '']}
              >
                <Text
                  {...item}
                  classNameTitle={styles.classNameTitle}
                  classNameSubTitle={styles[item.classNameSubTitle ?? '']}
                  classNameDescription={styles[item.classNameDescription ?? '']}
                />
              </li>
            ))
          : null}
      </ul>
    </>
  );
};

export default TextBlock;
