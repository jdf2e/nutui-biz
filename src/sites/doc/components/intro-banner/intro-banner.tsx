import React, { memo, useState } from "react";
import config from "@/config.json";
import { withRouter } from "react-router-dom";

// @ts-ignore
import "./intro-banner.scss";

const IntroBanner: React.FunctionComponent = (props: any) => {
  // const randomFun = ({ top, left }: any) => {
  //   const topNum = Math.round(Math.random() * (top.max - top.min)) + top.min;
  //   const leftNum =
  //     Math.round(Math.random() * (left.max - left.min)) + left.min;
  //   const styDistance = {
  //     left: leftNum + "px",
  //     top: topNum + "px",
  //   };
  //   return styDistance;
  // };
  const [activeColor, setActiveColor] = useState(-1);
  const addChildClass = (index: number) => {
    setActiveColor(index);
  };
  const goRouter = (item: any) => {
    props.history.push("/zh-CN/component/" + item.name);
  };
  return (
    <div className="intro-banner">
      <div className="intro-banner-circle">
        <div className="boxshadow-line-top"></div>
        <div className="boxshadow-line-bottom"></div>
        <div className="circle-logo">
          <img src="https://img12.360buyimg.com/imagetools/jfs/t1/93525/10/35630/3509/63e5e07fFee1229de/364b5180962e277c.png" />
        </div>
        <div className="circle-item circle-item-1"></div>
        <div className="circle-item circle-item-2"></div>
        <div className="circle-item circle-item-3"></div>
        <div className="circle-line line-1">
          <span className="line-word word-1">小</span>
          <span className="line"></span>
          <span className="line-word word-2">业务颗粒度</span>
          <span className="line"></span>
          <span className="line-word word-3">大</span>
        </div>
        <div className="circle-line line-2">
          <span className="line-word word-1">大</span>
          <span className="line"></span>
          <span className="line-word word-2">业务颗粒度</span>
          <span className="line"></span>
          <span className="line-word word-3">小</span>
        </div>
      </div>
      <div className="intro-banner-area">
        {config.nav.map((item, index) => {
          return (
            <div className={`area area-${index}`} key={item.name}>
              <div
                className={`area-group  area-group-${index} ${
                  activeColor > -1
                    ? activeColor === index
                      ? "activeColor area-group-title"
                      : "diabledColor"
                    : ""
                }`}
                onMouseEnter={() => addChildClass(index)}
                onMouseLeave={() => setActiveColor(-1)}
                // style={randomFun({
                //   top: { min: 70, max: 250 },
                //   left: { min: 300, max: 500 },
                // })}
              >
                <div className="area-item area-level-father"></div>
                <span className="area-level-text">{item.name}</span>
              </div>
              {item.packages.map((child, childIdx) => {
                return (
                  child.show && (
                    <div
                      className={`area-group area-group-child area-group-child-${childIdx} ${
                        activeColor > -1
                          ? activeColor === index
                            ? "activeColor"
                            : "diabledColor"
                          : ""
                      }`}
                      key={child.name}
                      onClick={() => goRouter(child)}
                    >
                      <div className="area-item area-level-child"></div>
                      <span className="area-level-text">{child.cName}</span>
                    </div>
                  )
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default withRouter(memo(IntroBanner));