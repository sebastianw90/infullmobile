import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button';
import styles from './Modal.module.css';

const Modal = ({
  isVisible,
  title,
  content,
  okAction,
  okText,
  cancelAction,
  cancelText,
}) => {
  if (!isVisible) {
    return null;
  }

  return (
    <div className={styles.modalMask}>
      <div className={styles.modalContainer}>
        <div className={styles.modalTitle}>{title}</div>
        <div className={styles.modalContent}>{content}</div>
        <div className={styles.modalActions}>
          <Button primary onClick={okAction}>{okText}</Button>
          <Button onClick={cancelAction}>{cancelText}</Button>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isVisible: PropTypes.bool,
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
  okAction: PropTypes.func.isRequired,
  cancelAction: PropTypes.func.isRequired,
  okText: PropTypes.string,
  cancelText: PropTypes.string,
};

Modal.defaultProps = {
  isVisible: false,
  okText: 'OK',
  cancelText: 'Cancel',
};

export default Modal;
