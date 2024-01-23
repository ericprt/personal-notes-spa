import React from "react";
import PropTypes from "prop-types";
import { showFormattedDate } from "../utils/data";

const DetailedNote = ({ title, createdAt, body }) => {
  const date = showFormattedDate(createdAt);
  return (
    <>
      <h3 className="detail-page__title">{title}</h3>
      <p className="detail-page__date">{date}</p>
      <p className="detail-page__body">{body}</p>
    </>
  );
};

DetailedNote.propTypes = {
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default DetailedNote;
