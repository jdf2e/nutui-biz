import React from "react";
import * as ReactDOM from "react-dom/client";
import "@/sites/assets/styles/reset.scss";
import "@/sites/assets/styles/md-style.scss";
import App from "./App";
import { isMobile } from "@/sites/assets/util";
const hash = window.location.hash.substring(2);

if (isMobile) {
  const path = hash.split("/");
  location.replace("demo.html" + `#/${path[path.length - 1]}`);
}
const rootElement = document.querySelector("#doc");

if (rootElement != null) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}
