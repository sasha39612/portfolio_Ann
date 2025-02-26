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
      {title ? <h2 className={classNameTitle}>{title}</h2> : null}
      {subTitle ? <h3 className={classNameSubTitle}>{subTitle}</h3> : null}
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
