import React from 'react';

import s from '../../styles/button.module.css';

const Button = ({
  type = 'button',
  click = () => null,
  value,
  className = null,
}) => (
  <button type={type} onClick={click} className={className || s.button}>
    {value}
  </button>
);

export default Button;
