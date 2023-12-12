import React from "react";

class ListForm extends React.Component {
  // Constructor with state
  constructor() {
    super();
    this.state = {
      item: "",
    };
  }

  handleChanges = (e) => {
    // update state with each keystroke
    this.setState({ ...this.state, item: e.target.value });
  };

  // class property to submit form
  submitForm = (e) => {
    this.props.addItem(e, this.state.item);
    this.setState({ ...this.state, item: "" });
  };

  render() {
    console.log("CLASS COMPONENT: ***Listform*** has fired.");
    return (
      <form onSubmit={this.submitForm}>
        {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
        <input
          type="text"
          name="item"
          value={this.state.item}
          onChange={this.handleChanges}
        />
        <button>Add</button>
      </form>
    );
  }
}

export default ListForm;

/* FUNCTIONAL VERSION

const ListForm = () => {
  const [item, setItem] = useState('');

  const updateItem = i => {
    setItem(i)
  }

  return (
    <form>
      <input type='text' name='item' />
      <button>Add</button>
    </form>
  )
}

*/
