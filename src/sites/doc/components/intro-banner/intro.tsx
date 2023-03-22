import React, { useEffect } from "react";
import * as ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import IntroBanner from "./intro-banner";

function RenderDomIntro() {
  const rootElement = document.querySelector("#intro-banner-box");
  if (rootElement != null) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <HashRouter>
        <IntroBanner />
      </HashRouter>
    );
  }
}
export default RenderDomIntro;
// setTimeout(() => {
//   const rootElement = document.querySelector("#intro-banner-box");
//   if (rootElement != null) {
//     const root = ReactDOM.createRoot(rootElement);
//     root.render(
//       <HashRouter>
//         <IntroBanner />
//       </HashRouter>
//     );
//   }
// }, 1000);
