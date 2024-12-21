import { PersonDataType } from '../../../interfaces/common';
import ImageComponent from '../image/Image';
import InfoData from './infoData/infoData';
import styles from './personData.module.scss';

const PersonData = ({
  textPart,
  imagePart,
  className,
  classNameContainer,
}: PersonDataType) => {
  return (
    <>
      <div className={styles[textPart.title.className ?? '']}>
        {textPart.title.text}
      </div>
      <div className={styles[className ?? '']}>
        <div className={styles[classNameContainer ?? '']}>
          <ImageComponent
            {...imagePart}
            className={styles[imagePart?.className ?? '']}
          />
          <ul className={styles[textPart.classNameContainer ?? '']}>
            {Array.isArray(textPart.mainInfo)
              ? textPart.mainInfo.map((item) => (
                  <li key={item.id} className={styles[item.className ?? '']}>
                    <InfoData {...item} />
                  </li>
                ))
              : null}
          </ul>
          <div className={styles[textPart.additionalInfo.className ?? '']}>
            <InfoData {...textPart.additionalInfo} />
          </div>

          <ul className={styles[textPart.classNameAttachmentsContainer ?? '']}>
            {Array.isArray(textPart.attachment)
              ? textPart.attachment.map((item) => (
                  <li key={item.id}>
                    <div className={styles[item?.title?.className ?? '']}>
                      {item?.title?.text}
                    </div>
                    <ul
                      className={
                        styles[textPart?.classNameAttachmentContainer ?? '']
                      }
                    >
                      {Array.isArray(item.description)
                        ? item.description.map((item) => (
                            <li key={item.id}>
                              <div className={styles[item.className ?? '']}>
                                {item.text}
                              </div>
                            </li>
                          ))
                        : null}
                    </ul>
                  </li>
                ))
              : null}
          </ul>
        </div>
      </div>
    </>
  );
};

export default PersonData;
