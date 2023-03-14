import React, { useEffect, useState, useRef } from "react";
import { compressText, copyCodeHtml, decompressText } from "./basedUtil";
import { getLocale } from "../../../assets/locale/uselocale";
interface A {
  text: string;
  scss: string;
  children?: React.ReactNode;
  expand: boolean;
}
const DemoBlock: React.FunctionComponent<A> = (props) => {
  const [onlineUrl, setOnlineUrl] = useState("");
  const [expand, setExpand] = useState(false);  // 展开收起态
  const [scroll, setScroll] = useState(false);  // 代码块是否滚动
  const [win, setWin] = useState(false);  // 判断是否是windows系统
  const onlineCode: any = useRef(null)
  
  useEffect(() => {
    const sourceMainReactJsStr = `import React from "react";
import ReactDOM from "react-dom";
import '@nutui/nutui-react/dist/style.css';
import "@nutui/nutui-biz/dist/style.css";
import App from "./app.tsx";
import "./app.scss";
ReactDOM.render(
  <App/>,
  document.getElementById("app")
);`;

    const sourceMainReactJs = compressText(sourceMainReactJsStr);
    const sourceReactJs = compressText(props.text);
    const sourceScss = compressText(props.scss || "");
    const onlineUrl = `https://codehouse.jd.com/?source=share&type=react&mainJs=${sourceMainReactJs}&appValue=${sourceReactJs}&scssValue=${sourceScss}`;
    setOnlineUrl(onlineUrl);
    
    OSnow()
    if (onlineCode?.current?.offsetHeight) {
      setScroll(true);
    }
  }, []);
  const copyCode = () => {
    const sourceValue = props.text;
    copyCodeHtml(sourceValue, () => {
      alert("复制成功");
    });
  };
  /* 判断系统类型 */
  const OSnow = () => {
    var isMac = /macintosh|mac os x/i.test(navigator.userAgent);
    if (!isMac) {
      setWin(true)
    }
  };
  return (
    <div ref={onlineCode} className={`online-code ${scroll ? "scroll" : ""} ${expand ? "isExpand" : ""} ${win ? "win" : ""}`}>
      {props.children}
      <div ref={onlineCode} className="nutui-react--demo-button">
        <div className="expand fixed" onClick={()=>setExpand(!expand)} title="展开全部代码">
          <img
            className="icon-expand"
            style={{ display: expand ? 'block' : 'none' }}
            src="https://storage.360buyimg.com/imgtools/0f4f7dedef-e103a4d0-c145-11ed-b382-1ba0fd4d7054.svg"
          />
          <img
            className="icon-unexpand"
            style={{ display: expand ? 'none' : 'block' }}
            src="https://storage.360buyimg.com/imgtools/a3cd1fddae-e10ec860-c145-11ed-b08f-234844faa103.svg"
          />
        </div>
        <div className="online-part">
          <a className="list" target="_blank" href={onlineUrl} rel="noreferrer">
            <img
              className="online-icon"
              src="https://img12.360buyimg.com/imagetools/jfs/t1/214225/34/8715/7002/61c31bf1E69324ee9/7a452063eba88be4.png"
            />
            <div className="online-tips">
              {getLocale() === "zh-CN" ? "在线调试" : "Open in CodeHouse"}
            </div>
          </a>
          <div className="list" onClick={copyCode}>
            <img
              className="online-icon"
              src="https://img10.360buyimg.com/imagetools/jfs/t1/142615/10/25537/3671/61c31e6eE3ba7fb90/d1953e2b47e40e86.png"
            />
            <div className="online-tips">
              {getLocale() === "zh-CN" ? "复制代码" : "Copy code"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DemoBlock;
