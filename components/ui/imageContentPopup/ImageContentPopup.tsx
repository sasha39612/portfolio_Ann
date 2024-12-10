import { ImagePropsType } from "../../../interfaces/common"
import ImageComponent from "../image/Image"
import Popup from "../popup/Popup"
import styles from './imageComponentPopup.module.scss'

interface ImageComponentPopupType {
  handleClosePopup: () => void;
  content: ImagePropsType[];
}

const ImageComponentPopup = ({ handleClosePopup, content }: ImageComponentPopupType) => {

  return (
    <>
      <Popup onClose={handleClosePopup}>
        {
          Array.isArray(content) ? <ul className={styles.container}>
            {content.map((img) => {
              return (
                <li key={img.id}>
                  <ImageComponent src={img.src} alt={img.alt} className={styles?.[img.className ?? '']} />
                </li>
              )
            })}
          </ul> : null
        }
      </Popup>
    </>
  )

}

export default ImageComponentPopup