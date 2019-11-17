import React from 'react';
import './navbar.scss';
import NavBarBtn from './navBarBtn/NavBarBtn';
import PropTypes from 'prop-types';

const NavBar = ({ callback, onChosenList }) => {
  return (
    <div className="navbar-container">
      <NavBarBtn title="Notes" name="published" onClick={onChosenList} />
      <NavBarBtn title="Drafts" name="draft" onClick={onChosenList} />
      <NavBarBtn onClick={callback} title="New Note" />
    </div>
  );
}
NavBar.propTypes = {
  callback: PropTypes.func.isRequired
};
export default NavBar;
