import React, { useEffect, useMemo, useState } from "react";
import { HashRouter, Switch, Route, useLocation } from "react-router-dom";
import "./App.scss";
import { nav } from "@/config.json";
import { getLocale } from "../assets/locale/uselocale";
import remarkGfm from "remark-gfm";
import { scssRaws } from "./docs";
import { visit } from "unist-util-visit";
import ReactMarkdown from "react-markdown";
import Nav from "@/sites/doc/components/nav";
import remarkDirective from "remark-directive";
import Header from "@/sites/doc/components/header";
import Demoblock from "@/sites/doc/components/demoblock";
import DemoPreview from "@/sites/doc/components/demo-preview";
import Issue from "@/sites/doc/components/issue";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import rehypeRaw from "rehype-raw";

import routers from "./router";
import classNames from "classnames";

function myRemarkPlugin() {
  return (tree: any) => {
    visit(tree, (node) => {
      if (node.type === "containerDirective") {
        if (node.name !== "demo") return;

        const data = node.data || (node.data = {});

        data.hName = "div";
        data.hProperties = {
          class: "nutui-react--demo-wrapper",
        };
      }
    });
  };
}

const Title = () => {
  let location = useLocation();

  const getComponentName = () => {
    const s = window.location.hash.split("/");
    const cname = s[s.length - 1].toLowerCase().replace("-taro", "");
    const component: any = {};
    nav.forEach((item: any) => {
      item.packages.forEach((sItem: any) => {
        if (sItem.name.toLowerCase() == cname) {
          component.name = sItem.name;
          component.cName = sItem.cName;
          return;
        }
      });
    });
    return component;
  };
  useEffect(() => {
    const componentName = getComponentName();
    setComponentName(componentName);
  }, [location]);

  const [componentName, setComponentName] = useState({ name: "", cName: "" });
  return (
    <div className="title">
      {componentName.name}&nbsp;{getLocale() === "zh-CN" && componentName.cName}
      <div className="npm-package">
        <a href="https://www.npmjs.com/package/@nutui/nutui-biz">
          <img
            src="https://img.shields.io/badge/npm-%40nutui%2Fnutui--biz-brightgreen"
            alt="@nutui/nutui"
          />
        </a>
      </div>
    </div>
  );
};

const App = (props) => {
  const taros = useMemo(() => {
    const docs = {} as any;
    const support = {} as any;
    nav.forEach((navItem) => {
      return navItem.packages.forEach((pk: any) => {
        const lname = pk.name.toLowerCase();
        if (pk.tarodoc) {
          docs[lname] = true;
        }
        if (pk.taro) {
          support[lname] = true;
        }
      });
    });
    return { docs, support };
  }, [nav]);

  const [fixed, setFixed] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [activeName, setActiveName] = useState("guide");

  const scrollTitle = () => {
    const hash = location.hash.indexOf("component") > -1;
    if (!hash) {
      return false;
    }
    let top = document.documentElement.scrollTop;
    if (top > 127) {
      setFixed(true);
      if (top < 142) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    } else {
      setFixed(false);
      setHidden(false);
    }
  };

  const switchDoc = (name: string) => {
    const href = window.location.href;
    if (name === "react") {
      window.location.href = href.replace("-taro", "");
    } else {
      window.location.href = href.replace("-taro", "") + "-taro";
    }
    setDocName(name);
  };

  useEffect(() => {
    document.addEventListener("scroll", scrollTitle);
  }, []);

  useEffect(() => {
    if (location.href.includes("component") && activeName !== 'card') {
      setActiveName("component");
    }
    if (location.hash === "#/") {
      location.href = "#/zh-CN/guide/intro";
    }
  });

  const [docname, setDocName] = useState("react");

  const handleClick = (activeName: string) => {
    window.scrollTo({
      top: 0
    })
    setActiveName(activeName);
  };

  return (
    <div>
      <HashRouter>
        <Header click={handleClick}></Header>
        <Nav click={handleClick} activeName1={activeName}></Nav>
        <div className="doc-content">
          {activeName === "component" && (
            <div className="doc-title">
              <div
                className={`doc-title-position ${fixed ? "fixed" : ""} ${
                  hidden ? "hidden" : ""
                }`}
              >
                <Title></Title>
                <Issue></Issue>
              </div>
            </div>
          )}
          <div
            className={classNames([
              "doc-content-document",
              activeName === "component" ? "isComponent" : "full",
            ])}
          >
            <Switch>
              {routers.map((ru, k) => {
                return (
                  <Route key={Math.random()} path={ru.path}>
                    {taros.docs[ru.name.replace("-taro", "")] ? (
                      <div className="doc-content-tabs ">
                        <div
                          className={`tab-item ${
                            docname === "react" ? "cur" : ""
                          }`}
                          onClick={() => switchDoc("react")}
                        >
                          React
                        </div>
                        <div
                          className={`tab-item ${
                            docname === "taro" ? "cur" : ""
                          }`}
                          onClick={() => switchDoc("taro")}
                        >
                          Taro
                        </div>
                      </div>
                    ) : (
                      <div
                        className="doc-content-tabs single"
                        style={{
                          display: `${
                            taros.support[ru.name.replace("-taro", "")]
                              ? "inherit"
                              : "none"
                          }`,
                        }}
                      >
                        {/* <div className="tab-item cur">React / Taro</div> */}
                      </div>
                    )}

                    <ReactMarkdown
                      children={ru.component}
                      remarkPlugins={[
                        remarkGfm,
                        remarkDirective,
                        myRemarkPlugin,
                      ]}
                      rehypePlugins={[rehypeRaw]}
                      components={{
                        code({ node, inline, className, children, ...props }) {
                          const match = /language-([^(scss)]\w+)/.exec(
                            className || ""
                          );
                          return !inline && match ? (
                            <Demoblock
                              text={String(children).replace(/\n$/, "")}
                              scss={(scssRaws as any)[ru.name + "Scss"]}
                            >
                              <SyntaxHighlighter
                                children={String(children).replace(/\n$/, "")}
                                language={"tsx"}
                                className="highlighter"
                                {...props}
                              />
                            </Demoblock>
                          ) : (
                            <code className={className} {...props}>
                              {children}
                            </code>
                          );
                        },
                      }}
                    />
                  </Route>
                );
              })}
            </Switch>
          </div>
          {activeName === "component" && (
            <div className="markdown-body">
              <DemoPreview className={`${fixed ? "fixed" : ""}`}></DemoPreview>
            </div>
          )}
        </div>
      </HashRouter>
    </div>
  );
};
export default App;
