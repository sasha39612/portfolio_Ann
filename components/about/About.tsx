import { AboutType } from '../../interfaces/common';
import ImageComponent from '../ui/image/Image';
import TextPart from '../ui/textPart/TextPart';
import styles from './about.module.scss';

const AboutComponent = ({
  textImageProps,
  educationBlock,
  skillsBlock,
  programsBlock,
}: AboutType) => {
  const { imagePart, textPart } = textImageProps;

  return (
    <>
      <div className={styles.container}>
        <ImageComponent
          src={imagePart?.src ?? ''}
          alt={imagePart?.alt ?? 'Some image'}
          className={styles?.[imagePart?.imageClassName ?? '']}
        />
        <TextPart {...textPart} />
      </div>
      <div className={styles.containerDown}>
        <ul>
          {Array.isArray(educationBlock)
            ? educationBlock.map((educationItem) => (
                <li key={educationItem.id}>
                  <TextPart {...educationItem} />
                </li>
              ))
            : null}
        </ul>
        <div>
          <TextPart {...skillsBlock} />
          <>
            <div className={styles?.[programsBlock?.title?.className ?? '']}>
              {programsBlock.title?.text}
            </div>
            <ul className={styles.containerLogos}>
              {Array.isArray(programsBlock.images)
                ? programsBlock.images.map((program) => (
                    <li key={program.id}>
                      <ImageComponent
                        src={program?.src ?? ''}
                        alt={program?.alt ?? 'Some image'}
                        className={styles?.[program?.className ?? '']}
                      />
                    </li>
                  ))
                : null}
            </ul>
          </>
        </div>
      </div>
    </>
  );
};

export default AboutComponent;
