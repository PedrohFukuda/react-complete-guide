import { Fragment } from "react";
import reactDom from "react-dom";
import styles from "./Modal.module.css";

// At public/index.js add the next line before body
// <div id="overlays"></div>

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

const portalTarget = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {reactDom.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalTarget
      )}
      {reactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalTarget
      )}
    </Fragment>
  );
};

export default Modal;
