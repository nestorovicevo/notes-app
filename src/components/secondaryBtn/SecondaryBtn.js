import React from 'react';
import './secondaryBtn.scss';
import PropTypes from 'prop-types';

const SecondaryBtn = ({ title, onClick, disabled }) => {
  return (
    <div className={!disabled ? "secondary-btn" : "secondary-btn--disabled"}>
      <button type="submit" onClick={onClick} disabled={disabled}>{title}</button>
    </div>
  );
}

SecondaryBtn.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};
export default SecondaryBtn;
