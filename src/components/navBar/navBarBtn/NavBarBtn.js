import React from 'react';
import PropTypes from 'prop-types';
import './navbarbtn.scss';

const NavBarBtn = ({ title, name, onClick }) => {
  return (
    <div className="navbar-btn">
      <button type="submit" name={name} onClick={onClick}>
        <p> {title} </p>
      </button>
    </div>
  );
}

NavBarBtn.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};
export default NavBarBtn;
