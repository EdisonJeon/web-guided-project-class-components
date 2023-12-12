import React from "react";

class Person extends React.Component {
  render() {
    console.log("CLASS COMPONENT: ***Person*** has fired.");
    return (
      <div>
        <h1>Hello {this.props.name}.</h1>
        <p>
          {this.props.name} is an unbelievable name. Stunning! Never change,{" "}
          {this.props.name}.
        </p>
      </div>
    );
  }
}

class AppClass extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Warren",
    };
  }

  handleNameButtonClick = (e) => {
    if (this.state.name === "Warren")
      this.setState({ ...this.state, name: "Allison" });
    else this.setState({ ...this.state, name: "Warren" });
  };

  render() {
    console.log("CLASS COMPONENT: ***AppClass*** has fired.");
    return (
      <div>
        <Person name={this.state.name} />
        <button onClick={this.handleNameButtonClick}>{`MAKE IT ${
          this.state.name === "Warren" ? "ALLISON" : "WARREN"
        }`}</button>
      </div>
    );
  }
}

export default AppClass;
