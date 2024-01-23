import React from "react";
import { addNote } from "../utils/data";
import NoteInput from "../components/NoteInput";

// class AddPage extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       notes: getInitialData(),
//     };

//     this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
//   }

//   onAddNoteHandler({ title, body }) {
//     this.setState((prevState) => {
//       return {
//         notes: [
//           ...prevState.notes,
//           {
//             id: +new Date(),
//             title,
//             body,
//             archived: false,
//             createdAt: new Date().toISOString(),
//           },
//         ],
//       };
//     });
//   }

//   render() {
//     return <NoteInput addNote={this.onAddNoteHandler} />;
//   }
// }

function AddPage() {
  function onAddNoteHandler({ title, body }) {
    addNote({ title, body });
  }

  return <NoteInput addNote={onAddNoteHandler} />;
}

export default AddPage;
