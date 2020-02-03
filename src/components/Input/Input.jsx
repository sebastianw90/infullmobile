import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.css';

const Input = ({
  textarea,
  label,
  value,
  onChange,
  placeholder,
}) => (
  <div className={styles.container}>
    <div className={styles.label}>{label}</div>
    <div>
      {
        textarea ? (
          <textarea
            value={value}
            onChange={onChange}
            className={styles.input}
            placeholder={placeholder}
          />
        ) : (
          <input
            value={value}
            onChange={onChange}
            className={styles.input}
            placeholder={placeholder}
          />
        )
      }
    </div>
  </div>
);

Input.propTypes = {
  textarea: PropTypes.bool,
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  textarea: false,
  label: '',
  value: '',
  placeholder: '',
};

export default Input;
