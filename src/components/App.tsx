import { useState } from "react";
import "./../assets/scss/App.scss";
import Main from "./Main";
import reactLogo from "../assets/img/react_logo.svg";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
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

export default App;
