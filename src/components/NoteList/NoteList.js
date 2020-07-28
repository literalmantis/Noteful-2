import React, { Component } from "react";
import { format } from "date-fns";
import "./NoteList.css";

export default class NoteList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.match.params.folderId);
    const Notelist = this.props.Snotes.map((note) => (
      <li className="note_item" {...note} key={note.id}>
        <span className="noteName">{note.name}</span>
        <br></br>
        <br></br>
        Modified
        <span className="Date"> {note.modified}</span>
        <button className="delete">Delete Note</button>
      </li>
    ));
    return (
      <div className="note_list">
        <ul>{Notelist}</ul>
        <button className="addNote">Add Note</button>
      </div>
    );
  }
}

NoteList.defaultProps = {
  notes: [],
};
