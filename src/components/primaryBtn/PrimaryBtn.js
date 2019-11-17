import React from 'react';
import './primaryBtn.scss';
import PropTypes from 'prop-types';

const PrimaryBtn = ({ title, onClick, disabled }) => {
  return (
    <div className={!disabled ? "primary-btn" : "primary-btn--disabled"}>
      <button type="submit" onClick={onClick} disabled={disabled}>{title}</button>
    </div>
  );
}

PrimaryBtn.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};
export default PrimaryBtn;
