import React from 'react';
import './singleNote.scss';
import DeleteBtn from '../deleteBtn/DeleteBtn';
import PrimaryBtn from '../primaryBtn/PrimaryBtn';

const SingleNote = ({ note, deleteNote, publishNote }) => {
  return (
    <div className="singlenote-wrapper">
      <div className="singlenote-container">
        <div className="singlenote-title-and-date">
          <div className="singlenote-title">{note.title}</div>
          <div className="singlenote-date">{note.date}</div>
        </div>
        <div className="singlenote-body">{note.body}</div>
        <div className="singlenote-author">{note.author}</div>
        <div className="singlenote-status">{note.status}</div>
        <div className="singlenote-deleteBtn">
          {note.status === 'draft' ?
            <PrimaryBtn onClick={() => publishNote(note.id)} title="Publish note" />
            : null
          }
          <DeleteBtn title="Delete note" onClick={() => deleteNote(note.id, note.status)} />
        </div>
        <hr />
      </div>
    </div >
  );
}

export default SingleNote;
