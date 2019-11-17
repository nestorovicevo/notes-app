import React, { useState } from 'react';
import './addNoteForm.scss';
import PrimaryBtn from '../primaryBtn/PrimaryBtn';
import SecondaryBtn from '../secondaryBtn/SecondaryBtn';
import Input from '../input/Input';
import TextArea from '../input/textArea/TextArea';
import PropTypes from 'prop-types';

const AddNoteForm = ({ setVisibility, addNote }) => {
  const [valueState, setValueState] = useState({
    title: '',
    body: '',
    author: ''
  });

  const [canCreate, setCanCreate] = useState(false);

  const handleOnChange = e => {
    const name = e.target.name;
    const newValueState = { ...valueState, ...{ [name]: e.target.value } };
    setValueState(newValueState);
    setCanCreate(checkCanCreate(newValueState));
  };

  const checkCanCreate = (valueState) => {
    return valueState.title.length > 0 && !!valueState.body.length > 0 && !!valueState.author.length > 0;
  }

  const getFormatedCurrentDate = () => {
    const dt = new Date();

    return `${
      dt.getFullYear().toString().padStart(4, '0')}-${(dt.getMonth() + 1).toString().padStart(2, '0')}-${
      dt.getDate().toString().padStart(2, '0')} ${
      dt.getHours().toString().padStart(2, '0')}:${
      dt.getMinutes().toString().padStart(2, '0')}:${
      dt.getSeconds().toString().padStart(2, '0')}`;
  }

  const handleSubmit = e => {
    const date = getFormatedCurrentDate();
    const status = 'published';
    const note = { ...valueState, date, status };
    addNote(note);
  }

  const handleSaveAsDraft = e => {
    const date = getFormatedCurrentDate();
    const status = 'draft';
    const note = { ...valueState, date, status };
    addNote(note);
  }

  return (
    <div className="add-note-wrapper">
      <div className="add-note-container">
        <div className="add-note-header">Add New Note</div>
        <div className="add-note-fields">
          <form>
            <div className="add-note-row">
              <label> Title: </label>
              <Input
                name="title"
                value={valueState.title}
                onChange={handleOnChange}
              />
            </div>
            <div className="add-note-row">
              <label> Text: </label>
              <TextArea
                rows={10}
                cols={104}
                name="body"
                value={valueState.body}
                onChange={handleOnChange}
              />
            </div>
            <div className="add-note-row">
              <label> Author Name: </label>
              <Input
                name="author"
                value={valueState.author}
                onChange={handleOnChange}
              />
            </div>
          </form>
        </div>
        <div className="add-note-buttons">
          <PrimaryBtn disabled={!canCreate} onClick={handleSubmit} title="Add Note" />
          <SecondaryBtn disabled={!canCreate} onClick={handleSaveAsDraft} title="Save as a Draft" />
          <div className="cancel-btn">
            <button type="submit" onClick={() => {
              setVisibility(false);
            }}><p>Cancel</p></button>
          </div>
        </div>

      </div>
    </div>
  );
}
AddNoteForm.propTypes = {
  setVisibility: PropTypes.func.isRequired
};
export default AddNoteForm;
