'use client';
import { TextSimpleBlock } from '../../../interfaces/common';
import { getDangerousHTML } from '../../../lib/getDangerousHTML';

const Text = ({
  title,
  subTitle,
  description,
  classNameTitle,
  classNameSubTitle,
  classNameDescription,
  isDangerousHTML,
}: TextSimpleBlock) => {
  return (
    <>
      {title ? <div className={classNameTitle}>{title}</div> : null}
      {subTitle ? <div className={classNameSubTitle}>{subTitle}</div> : null}
      {description ? (
        isDangerousHTML ? (
          <div
            className={classNameDescription}
            dangerouslySetInnerHTML={getDangerousHTML(description)}
          />
        ) : (
          <div className={classNameDescription}>{description}</div>
        )
      ) : null}
    </>
  );
};

export default Text;
