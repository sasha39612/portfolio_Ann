import React, { ReactNode, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './popup.module.scss'

interface PopupProps {
  children: ReactNode;
  onClose: () => void;
}

const Popup = ({ children, onClose }: PopupProps) => {

  const el = document.createElement('div');

  useEffect(() => {
    const portalRoot = document.getElementById('portal-root');
    if (portalRoot) {
      portalRoot.appendChild(el);
    }
    return () => {
      if (portalRoot) {
        portalRoot.removeChild(el);
      }
    };
  }, [el]);

  return ReactDOM.createPortal(
    <div className={styles.popupOverlay} onClick={onClose}>
      <div
        className={styles.popupContent}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>
        {children}
      </div>
    </div>,
    el
  );
};

export default Popup;
