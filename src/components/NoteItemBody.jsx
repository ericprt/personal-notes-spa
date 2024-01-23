import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NoteItemBody = ({ id, title, createdAt, body }) => {
  return (
    <div className="note-item__content">
      <h3 className="note-item__title">
        <Link to={`note/${id}`}>{title}</Link>
      </h3>
      <p className="note-item__date">{createdAt}</p>
      <p className="note-item__body">{body}</p>
    </div>
  );
};

NoteItemBody.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default NoteItemBody;
