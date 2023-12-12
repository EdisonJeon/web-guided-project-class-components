import React from "react";

const Item = (props) => {
  console.log("FUNCTIONAL COMPONENT: ***Item*** has fired.");
  return (
    <div
      className={`item${props.item.purchased ? " purchased" : ""}`}
      onClick={() => props.toggleItem(props.item.id)}
    >
      <p>{props.item.name}</p>
    </div>
  );
};

export default Item;

/*  CLASS STRUCTURE (OUTDATED SYSTEM)

class Item extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <h1>Hello</h1>
    )
  }
}

export default Item

*/
