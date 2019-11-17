import React from 'react';
import PropTypes from 'prop-types';
import './input.scss';

const Input = ({ value, onChange, name }) => {
  return (
    <div className="input-custom-style">
      <input
        name={name}
        value={value}
        onChange={e => onChange(e)}
      />
    </div>
  );
};
Input.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};
export default Input;
