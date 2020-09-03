import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <header>
        <form id="todo_form" onSubmit={this.props.addItem}>
          <input
            type="text"
            placeholder="Enter Todo list"
            value={this.props.value}
            onChange={this.props.handleInput}
          />
          <button type="submit"> Add</button>
        </form>
      </header>
    );
  }
}
