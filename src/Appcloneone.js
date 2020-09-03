import React from "react";

import "./App.css";
import { Component } from "react";
import ListItems from "./ListItems";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Header from "./Header";
library.add(faTrash);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      currentItems: {
        text: "",
        key: "",
        boolValue: false,
      },
      isEdit: false,
      isEditValue: {},
      isUpdate: false,
      editChange: {
        value: false,
      },
    };
  }

  handleUpdate = (item, i) => {
    console.log(item);

    this.setState({
      isUpdate: true,
      isEditValue: item,
    });
  };

  handleEdit = (item, i) => {
    console.log(item);

    this.setState({
      isEdit: true,
      isEditValue: item,
    });
  };

  handleInput = (e) => {
    this.setState({
      currentItems: {
        text: e.target.value,
        key: Date.now(),
        boolValue: false,
      },
    });
  };
  addItem = (e) => {
    e.preventDefault();
    const newItem = this.state.currentItems;

    console.log("the value fromte the addItem", newItem);
    if (newItem.text !== "") {
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItems: {
          boolValue: false,
          text: "",
          key: "",
        },
      });
    }
  };
  deleteItem = (key) => {
    const filteredItems = this.state.items.filter((item) => item.key !== key);
    this.setState({
      items: filteredItems,
    });
  };
  setUpdate = (text, key) => {
    const items = this.state.items;
    items.map((item) => {
      if (item.key === key) {
        item.text = text;
      }
    });
    this.setState({
      items: items,
    });
  };
  render() {
    if (this.state.isEdit) {
      const item = this.state.isEditValue;

      item.boolValue = true;

      this.setState({
        isEdit: false,
      });
    }

    /* for checking the update value because as we are in the class component our state or the value of item.boolValue is not being changed automatically in the method because it the c */
    if (this.state.isUpdate) {
      const item = this.state.isEditValue;
      item.boolValue = false;

      this.setState({
        isUpdate: false,
      });
    }

    return (
      <div className="App">
        <h1>To-Do List</h1>

        <Header
          addItem={this.addItem}
          handleInput={this.handleInput}
          value={this.state.currentItems.text}
        />

        <ListItems
          items={this.state.items}
          deleteItem={this.deleteItem}
          setUpdate={this.setUpdate}
          handleEdit={this.handleEdit}
          handleUpdate={this.handleUpdate}
          editChange={this.state.editChange}
        ></ListItems>
      </div>
    );
  }
}
export default App;
