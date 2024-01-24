import React, { Component } from "react";
import "../Components/NoteApp.css";

export default class Editor extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: "",
    };
  }
  handleChange(e) {
    this.setState({ value: e.target.value });
  }
  render() {
    return (
      <div className="mainContainer">
        <div className="input">
          <h3>Input</h3>
          <textarea
            className="input-text"
            onChange={this.handleChange}
            defaultValue={this.state.value}
          />
        </div>
        <h3 className="proname">Pro Note</h3>
        <div className="output">
          <div className="outputText">{this.state.value}</div>
        </div>
      </div>
    );
  }
}
