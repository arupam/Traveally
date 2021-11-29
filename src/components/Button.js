
import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];

const SIZES = ['btn--medium', 'btn--large'];

const DEST = ['/sign-up','/dashboard2'];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  destination
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle  : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  const checkDestination = DEST.includes(destination) ? destination : DEST[0];

  return (
    <Link to={checkDestination} className='btn-mobile'>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
