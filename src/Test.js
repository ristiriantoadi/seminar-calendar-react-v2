import React, { Component } from "react";
import Calendar from "react-calendar";
// import Calendar from "react-calendar/dist/entry.nostyle";
import style from "./style.css";

export default class Test extends Component {
  state = {
    value: new Date()
  };

  onChange = value => this.setState({ value });

  render() {
    const { value } = this.state;

    return (
      <Calendar
        className={["custom-style"]}
        onChange={this.onChange}
        value={value}
      />
    );
  }
}
