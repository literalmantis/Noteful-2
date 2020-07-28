import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class NoteListNav extends Component {
  render() {
    const Snotes = this.props.notes.filter((note) => note.folderid);

    const Notelist = Snotes.map((MyNote, name) => (
      <NavLink className="NoteLink" to={`/note/${MyNote.id}`}>
        <li className="note_item" {...MyNote} key={MyNote.id} name={name}>
          <span className="noteName">{MyNote.name}</span>
          <br></br>
          <br></br>
          Modified
          <span className="Date"> {MyNote.modified}</span>
          <button className="delete">Delete Note</button>
        </li>
      </NavLink>
    ));
    return (
      <div className="note_list">
        <ul>{Notelist}</ul>
        <button className="addNote">Add Note</button>
      </div>
    );
  }
}
