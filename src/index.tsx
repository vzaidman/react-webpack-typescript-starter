import "./scripts/wdyr";

import { createRoot } from "react-dom/client";
import * as React from "react";
import App from "./components/App";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<App />);
