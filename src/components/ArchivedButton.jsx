import React from "react";
import PropTypes from "prop-types";

const ArchivedButton = ({ id, onArchived }) => {
  return (
    <button className="note-item__archive-button" onClick={() => onArchived(id)}>
      Arsipkan
    </button>
  );
};

ArchivedButton.propTypes = {
  id: PropTypes.string.isRequired,
  onArchived: PropTypes.func.isRequired,
};

export default ArchivedButton;
