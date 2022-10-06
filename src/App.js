import React from "react";
import { hot } from "react-hot-loader";

const App = () => {
  return (
    <div>
      <h1>Hello it's work! !</h1>
      <button className="primary-btn">Click</button>
    </div>
  );
};

export default hot(module)(App);
