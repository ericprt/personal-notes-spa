import React from "react";
import PropTypes from "prop-types";

const UnArchivedButton = ({ id, onUnArchived }) => {
  return (
    <button className="note-item__archive-button" onClick={() => onUnArchived(id)}>
      Pindahkan
    </button>
  );
};

UnArchivedButton.propTypes = {
  id: PropTypes.string.isRequired,
  onUnArchived: PropTypes.func.isRequired,
};

export default UnArchivedButton;
