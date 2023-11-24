import React from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./Dialog.module.css";

const Dialog = ({ isOpen, onClose, children }) => {
  return (
    <CSSTransition
      in={isOpen}
      timeout={300}
      classNames={{
        enter: styles.overlay_enter,
        enterActive: styles.overlay_enter_active,
        exit: styles.overlay_exit,
        exitActive: styles.overlay_exit_active,
      }}
      unmountOnExit
    >
      <div className={styles.overlay} onClick={onClose}>
        <CSSTransition
          in={isOpen}
          timeout={300}
          classNames={{
            enter: styles.dialog_enter,
            enterActive: styles.dialog_enter_active,
            exit: styles.dialog_exit,
            exitActive: styles.dialog_exit_active,
          }}
          unmountOnExit
        >
          <div className={styles.dialog} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={onClose}>
              &times;
            </button>
            {children}
          </div>
        </CSSTransition>
      </div>
    </CSSTransition>
  );
};

export default Dialog;
