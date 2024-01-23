import React from "react";
import PropTypes, { object } from "prop-types";
import NoteItem from "./NoteItem";

const NotesList = ({ notes, onDelete, onArchived, onUnArchived }) => {
  return (
    <div className="notes-list">
      {notes.length === 0 ? <p className="notes-list__empty-message">Tidak Ada Catatan</p> : notes.map((note) => <NoteItem key={note.id} id={note.id} onDelete={onDelete} onArchived={onArchived} onUnArchived={onUnArchived} {...note} />)}
    </div>
  );
};

NotesList.propTypes = {
  notes: PropTypes.arrayOf(object).isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchived: PropTypes.func.isRequired,
  onUnArchived: PropTypes.func.isRequired,
};

export default NotesList;
