import React from "react";
import { useState } from "react";

import "./App.css";
import Header from "./Header";

import ListItems from "./ListItems";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
library.add(faTrash);
const App = () => {
  const [state, setState] = useState({
    items: [],
    currentItems: {
      text: "",
      key: "",
      boolValue: false,
    },
    isEdit: false,
    isEditValue: {},
    isUpdate: false,
  });

  const handleUpdate = (item, i) => {
    console.log(item);

    setState({
      ...state,
      isUpdate: true,
      isEditValue: item,
    });
  };

  const handleEdit = (item, i) => {
    console.log(item);

    setState({
      ...state,
      isEdit: true,
      isEditValue: item,
    });
  };
  const handleInput = (e) => {
    setState({
      ...state,
      currentItems: {
        text: e.target.value,
        key: Date.now(),
        boolValue: false,
      },
    });
  };

  const addItem = (e) => {
    e.preventDefault();
    const newItem = state.currentItems;

    console.log("the value fromte the addItem", newItem);
    if (newItem.text !== "") {
      const newItems = [...state.items, newItem];
      setState({
        ...state,
        items: newItems,
        currentItems: {
          boolValue: false,
          text: "",
          key: "",
        },
      });
    }
  };
  const deleteItem = (key) => {
    const filteredItems = state.items.filter((item) => item.key !== key);
    setState({
      ...state,
      items: filteredItems,
    });
  };

  const setUpdate = (text, key) => {
    const items = state.items;
    items.map((item) => {
      if (item.key === key) {
        item.text = text;
      }
    });
    setState({
      ...state,
      items: items,
    });
  };
  if (state.isEdit) {
    const item = state.isEditValue;

    item.boolValue = true;

    setState({
      ...state,
      isEdit: false,
    });
  }

  if (state.isUpdate) {
    const item = state.isEditValue;
    item.boolValue = false;

    setState({
      ...state,
      isUpdate: false,
    });
  }
  return (
    <div className="App">
      <h1>
        S<span className="brand">a</span>j<span className="brand">i</span>n
        To-Do List
      </h1>

      <Header
        addItem={addItem}
        handleInput={handleInput}
        value={state.currentItems.text}
      />

      <ListItems
        items={state.items}
        deleteItem={deleteItem}
        setUpdate={setUpdate}
        handleEdit={handleEdit}
        handleUpdate={handleUpdate}
        editChange={state.editChange}
      ></ListItems>
    </div>
  );
};

export default App;
