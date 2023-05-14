import React from 'react';
import { render } from "react-dom";
import { Title } from "./lib";

const App = () => (
  <div style={{ width: 640, margin: "15px auto" }}>
    <h1>Hello React</h1>
    <Title title="This is a test title" />
  </div>
);

render(<App />, document.getElementById("root"));
