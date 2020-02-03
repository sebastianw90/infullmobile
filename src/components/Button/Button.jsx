import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './Button.module.css';

const Button = ({
  children,
  onClick,
  primary,
  danger,
}) => (
  <button
    type="button"
    className={cx(
      styles.buttonStyles,
      primary && styles.buttonPrimary,
      danger && styles.buttonDanger,
    )}
    onClick={onClick}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  primary: PropTypes.bool,
  danger: PropTypes.bool,
};

Button.defaultProps = {
  children: '',
  primary: false,
  danger: false,
};

export default Button;
