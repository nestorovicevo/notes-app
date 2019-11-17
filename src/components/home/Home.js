import React, { useState } from 'react';
import './home.scss';
import NotesList from '../notesList/NotesList';
import NavBar from '../navBar/NavBar';
import notes from '../../notes';
import Modal from 'react-modal';
import AddNoteForm from '../addNoteForm/AddNoteForm';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    padding: 0
  }
};

const Home = () => {
  const filterNotesPerStatus = (notes, status) => {
    return notes.filter(note => note.status === status);
  };

  const [currentNotes, setCurrentNotes] = useState(filterNotesPerStatus(notes, 'published'));
  const [allNotes, setAllNotes] = useState(notes);

  const [showModal, setShowModal] = useState(false);

  const handleAddNote = (valueState) => {
    valueState.id = Math.random();
    const notes = [...allNotes, valueState];
    setAllNotes(notes);
    setCurrentNotes(filterNotesPerStatus(notes, valueState.status));
    handleCloseModal();
  };

  const handleDeleteNote = (id, status) => {
    const notes = allNotes.filter(item => item.id !== id);
    setAllNotes(notes);
    setCurrentNotes(filterNotesPerStatus(notes, status));
  };

  const handlePublishNote = (id) => {
    const note = allNotes.find(item => item.id === id);
    note.status = 'published';
    setCurrentNotes(filterNotesPerStatus(allNotes, 'draft'));
  };

  const handleChosenList = (e) => {
    const chosenStatus = e.currentTarget.name;
    setCurrentNotes(filterNotesPerStatus(allNotes, chosenStatus));
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="home-wrapper">
      <div className="home-container">
        <div className="app-name">Notes app</div>
        <NavBar callback={handleOpenModal} onChosenList={handleChosenList} />

        {currentNotes ? (
          <NotesList
            notes={currentNotes}
            deleteNote={handleDeleteNote}
            publishNote={handlePublishNote}
          />
        ) : null}

        <Modal
          isOpen={showModal}
          style={customStyles}
        >
          <AddNoteForm
            setVisibility={handleCloseModal}
            addNote={handleAddNote}
          />
        </Modal>
      </div>
    </div>
  );
}

export default Home;
