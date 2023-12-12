import React, { useState } from "react";

const Person = (props) => {
  console.log("FUNCTIONAL COMPONENT: ***Person*** has fired.");
  const { name } = props;
  return (
    <div>
      <h1>Hello {name}!</h1>
      <p>
        {name} is a great name! Never change {name}.
      </p>
    </div>
  );
};

const AppFunc = () => {
  console.log("FUNCTIONAL COMPONENT: ***AppFunc*** has fired.");
  const [name, setName] = useState("Warren");
  const handleClick = () => {
    if (name === "Warren") setName("Allison");
    else setName("Warren");
  };

  return (
    <div>
      <Person name={name} />
      <button onClick={handleClick}>{`MAKE IT ${
        name === "Warren" ? "ALLISON" : "WARREN"
      }!`}</button>
    </div>
  );
};

export default AppFunc;
