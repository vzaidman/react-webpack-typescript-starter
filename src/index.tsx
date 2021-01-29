import * as React from "react";
import { render } from "react-dom";
import App from "./components/App";
import "./scripts/wdyr";

const rootEl = document.getElementById("root");

render(<App />, rootEl);
