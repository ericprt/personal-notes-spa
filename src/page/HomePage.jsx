import React from "react";
import { Link } from "react-router-dom";
import { getAllNotes } from "../utils/data";
import NotesList from "../components/NotesList";

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getAllNotes(),
      //   archivedNotes: [],
      search: "",
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    // this.onDeleteArchivedHandler = this.onDeleteArchivedHandler.bind(this);
    this.onArchivedNoteHandler = this.onArchivedNoteHandler.bind(this);
    this.onUnArchivedNoteHandler = this.onUnArchivedNoteHandler.bind(this);
    this.onSearchInputHandler = this.onSearchInputHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);

    this.setState({ notes });
  }

  //   onDeleteArchivedHandler(id) {
  //     const notes = this.state.archivedNotes.filter((note) => note.id !== id);

  //     this.setState({
  //       archivedNotes: notes,
  //     });
  //   }

  onArchivedNoteHandler(id) {
    // const { notes, archivedNotes } = this.state;
    // const noteToArchive = notes.find((note) => note.id === id);

    // if (noteToArchive) {
    //   noteToArchive.archived = true;
    //   this.setState({
    //     archivedNotes: [...archivedNotes, noteToArchive],
    //   });
    //   this.onDeleteHandler(id);
    // }

    this.setState((prevState) => {
      const updatedNotes = prevState.notes.map((note) => (note.id === id ? { ...note, archived: true } : note));

      return {
        notes: updatedNotes,
      };
    });
  }

  onUnArchivedNoteHandler(id) {
    // const { notes, archivedNotes } = this.state;
    // const noteToUnarchive = archivedNotes.find((note) => note.id === id);

    // if (noteToUnarchive) {
    //   noteToUnarchive.archived = false;
    //   this.setState({
    //     notes: [...notes, noteToUnarchive],
    //   });
    //   this.onDeleteArchivedHandler(id);
    // }

    this.setState((prevState) => {
      const updatedNotes = prevState.notes.map((note) => (note.id === id ? { ...note, archived: false } : note));

      return {
        notes: updatedNotes,
      };
    });
  }

  onSearchInputHandler(e) {
    this.setState({
      search: e.target.value,
    });
  }

  render() {
    // const filteredNotes = this.state.search ? this.state.notes.filter((note) => note.title.toLowerCase().includes(this.state.search.toLowerCase())) : this.state.notes;

    // const filteredArchivedNotes = this.state.search ? this.state.archivedNotes.filter((note) => note.title.toLowerCase().includes(this.state.search.toLowerCase())) : this.state.archivedNotes;

    const activeNotes = this.state.notes.filter((note) => !note.archived);
    const archivedNotes = this.state.notes.filter((note) => note.archived);
    return (
      <>
        <h2>Catatan Aktif</h2>
        <NotesList notes={activeNotes} onDelete={this.onDeleteHandler} onArchived={this.onArchivedNoteHandler} />
        <h2>Arsip Catatan</h2>
        <NotesList notes={archivedNotes} onDelete={this.onDeleteHandler} onUnArchived={this.onUnArchivedNoteHandler} />
        <Link to="/add">
          <button className="action">
            <span className="material-symbols-outlined add-page__action">add</span>
          </button>
        </Link>
      </>
    );
  }
}

export default HomePage;
