import React, { useState, useEffect } from 'react';
import './notesList.scss';
import SingleNote from '../singleNote/SingleNote';
import PrimaryBtn from '../primaryBtn/PrimaryBtn';
import Filter from '../filter/Filter';

const NotesList = ({ notes, deleteNote, publishNote }) => {
  const [notesList, updateList] = useState(notes);
  const [searchTerm, updateSearchTerm] = useState('');

  useEffect(() => {
    updateList(notes)
  }, [notes]);

  const sortByDate = () => {
    const sortedNotesList = notesList.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);

      return dateA < dateB ? 1 : -1;
    });

    updateList([...sortedNotesList]);
  };

  const handleOnChange = e => {
    updateSearchTerm(e.target.value);
  };

  return (
    <div className="allnotes-wrapper">
      <div className="allnotes-container">
        <div className="allnotes-sub-nav">
          <Filter onChange={handleOnChange} />
          <PrimaryBtn onClick={sortByDate} title="Sort" />
        </div>
        <ul>
          {notesList
            .filter(note => {
              return searchTerm.length > 0 ? note.title.toLowerCase().startsWith(searchTerm.toLowerCase()) : true
            })
            .map((note) =>
              (<li key={note.id}><SingleNote note={note} deleteNote={deleteNote} publishNote={publishNote} /></li>)
            )
          }
        </ul>
      </div>
    </div>
  );
}

export default NotesList;
