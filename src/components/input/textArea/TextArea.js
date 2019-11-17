import React from 'react';
import PropTypes from 'prop-types';
import './textArea.scss';

const TextArea = ({ value, onChange, name, rows, cols }) => {
  return (
    <div className="textarea-custom-style">
      <textarea rows={rows} cols={cols} name={name} value={value} onChange={e => onChange(e)} />
    </div>
  );
};
TextArea.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  rows: PropTypes.number.isRequired,
  cols: PropTypes.number.isRequired
};
export default TextArea;
