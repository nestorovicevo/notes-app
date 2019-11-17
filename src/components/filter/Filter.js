import React from 'react';
import PropTypes from 'prop-types';
import './filter.scss';

const Filter = ({ onChange }) => {
  return (
    <div className="filter-custom-style">
      <input
        onChange={onChange}
      />
    </div>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default Filter;
