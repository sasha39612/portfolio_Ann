'use client';
import Text from '../../ui/text/Text';
import { TextSimpleBlock } from '../../../interfaces/common';
import styles from './textBlockWithoutTitle.module.scss';

const TextBlockWithoutTitle = ({
  textWithoutTitleSaving,
}: {
  textWithoutTitleSaving: TextSimpleBlock[];
}) => {
  return (
    <ul className={styles.wrapperWithoutTitle}>
      {Array.isArray(textWithoutTitleSaving)
        ? textWithoutTitleSaving.map((item) => (
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

export default TextBlockWithoutTitle;
