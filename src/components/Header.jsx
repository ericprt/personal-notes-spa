import React from "react";
import NoteSearchInput from "./NoteSearchInput";
import { Link } from "react-router-dom";

const Header = (/*{ searchKeyword, searchHandler }*/) => {
  return (
    <div className="note-app__header">
      <h1>
        <Link to="/">Notes</Link>
      </h1>
      {/* <NoteSearchInput searchKeyword={searchKeyword} searchHandler={searchHandler} /> */}
    </div>
  );
};

export default Header;
