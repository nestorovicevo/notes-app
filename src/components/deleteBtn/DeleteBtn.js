import React from 'react';
import './deleteBtn.scss';
import PropTypes from 'prop-types';

const DeleteBtn = ({ title, onClick }) => {
  return (
    <div className="delete-btn">
      <button type="submit" onClick={onClick}>{title}</button>
    </div>
  );
}

DeleteBtn.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};
export default DeleteBtn;
