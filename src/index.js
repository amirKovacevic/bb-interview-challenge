import React from "react";
import { render } from "react-dom";

import User from "./user";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <h2>Brighter Brain Interview Challenge</h2>
    <User id="1" />
  </div>
);

render(<App />, document.getElementById("root"));
