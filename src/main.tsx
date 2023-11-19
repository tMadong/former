import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "#app/index";

const RootElement = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById("root")!).render(RootElement);

