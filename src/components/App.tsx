import { useState } from "react";
import { hot } from "react-hot-loader";

const reactLogo = require("./../assets/img/react_logo.svg");
import "./../assets/scss/App.scss";
import Main from "./Main";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <h1>Hello World!</h1>
      <p>Foo to the barz</p>
      <img src={reactLogo.default} height="480" />
      <button onClick={() => setCount(count + 1)}>hey! {count}</button>
      <Main style={{ width: 100 }} />
    </div>
  );
};

declare let module: Record<string, unknown>;

export default hot(module)(App);
