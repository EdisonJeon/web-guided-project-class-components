import React from "react";
import AppClass from "./AppClass";
import AppFunc from "./AppFunc";

const App = () => {
  return (
    <div>
      <h2>@@@ CLASS @@@</h2>
      <AppClass />
      <h2>@@@ FUNCTION @@@</h2>
      <AppFunc />
    </div>
  );
};

export default App;
