import React from "react";
import "./ListItems.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FlipMove from "react-flip-move";
function ListItems(props) {
  const {
    items,
    handleEdit,
    handleUpdate,
    setUpdate,
    deleteItem,
    editChange,
  } = props;
  console.log(editChange);

  const listItems = items.map((item, i) => {
    return (
      <div className="list" key={item.key}>
        <p>
          <input
            type="text"
            disabled={item.boolValue ? false : true}
            id={item.key}
            value={item.text}
            onChange={(e) => {
              setUpdate(e.target.value, item.key);
            }}
          />

          <span>
            {item.boolValue ? (
              <i
                className="fa fa-check"
                onClick={() => {
                  handleUpdate(item, i);
                }}
              ></i>
            ) : (
              <i className="fa fa-edit" onClick={() => handleEdit(item, i)}></i>
            )}
          </span>
          <span>
            <FontAwesomeIcon
              className="faicons"
              icon="trash"
              onClick={() => deleteItem(item.key)}
            />
          </span>
        </p>
      </div>
    );
  });

  return (
    <div>
      <FlipMove duration={500} easing="ease-in-out">
        {listItems}
      </FlipMove>
    </div>
  );
}

export default ListItems;
