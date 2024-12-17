import TextImage from "../textImage/TextImage";
import TextImageWithFlex from "../textImageWithGrid/TextImageWithFlex";
import Text from "../ui/text/Text";
import { ProjectSavingTypes } from "./type"
import styles from "./saving.module.scss"

const ProjectSaving = (props: ProjectSavingTypes) => {
  const { imageTextSaving, imageTextWithFlexSaving, textWithTitleSaving, textWithoutTitleSaving } = props;

  return (
    <>
      <TextImage {...imageTextSaving} />
      <TextImageWithFlex {...imageTextWithFlexSaving} />
      <ul className={styles.wrapperWithTitle}>
        {Array.isArray(textWithTitleSaving) ? textWithTitleSaving.map((item) => (
          <Text key={item.id} {...item} classNameContainer={styles[item.classNameContainer ?? '']} classNameTitle={styles[item.classNameTitle ?? '']} classNameDescription={styles[item.classNameDescription ?? '']} />
        )) : null}
      </ul>
      <ul className={styles.wrapperWithoutTitle}>
        {Array.isArray(textWithoutTitleSaving) ? textWithoutTitleSaving.map((item) => (
          <Text key={item.id} {...item} classNameContainer={styles[item.classNameContainer ?? '']} classNameDescription={styles[item.classNameDescription ?? '']} />
        )) : null}
      </ul>
    </>
  )
}

export default ProjectSaving
