import React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import "@/sites/assets/styles/reset.scss";

import("../../packages/nutui.biz.scss");
import { isMobile } from "@/sites/assets/util";
const hash = window.location.hash.substring(2);

if (isMobile) {
  location.href = `/nutui/biz/demo.html#/${hash}`;
  sessionStorage.removeItem("biz-env");
} else {
  if (sessionStorage.getItem("biz-env") !== "PC") {
    location.href = `/nutui/biz/#/zh-CN/component/${hash}`;
  }
  sessionStorage.setItem("biz-env", "PC");
}
const rootElement = document.querySelector("#app");

if (rootElement != null) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}
