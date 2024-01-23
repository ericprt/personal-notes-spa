import React from "react";
import PropTypes from "prop-types";
import NoteItemBody from "./NoteItemBody";
import { showFormattedDate } from "../utils/data";
import DeleteButton from "./DeleteButton";
import ArchivedButton from "./ArchivedButton";
import UnArchivedButton from "./UnArchivedButton";

const NoteItem = ({ id, title, body, createdAt, archived, onDelete, onArchived, onUnArchived }) => {
  const date = showFormattedDate(createdAt);
  return (
    <div className="note-item">
      <NoteItemBody key={id} id={id} title={title} createdAt={date} body={body} />
      <div className="note-item__action">
        <DeleteButton id={id} onDelete={onDelete} />
        {archived ? <UnArchivedButton id={id} onUnArchived={onUnArchived} /> : <ArchivedButton id={id} onArchived={onArchived} />}
      </div>
    </div>
  );
};

NoteItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchived: PropTypes.func.isRequired,
  onUnArchived: PropTypes.func.isRequired,
};

export default NoteItem;
