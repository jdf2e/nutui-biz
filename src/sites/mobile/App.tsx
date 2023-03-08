import "./App.scss";
import React, { FunctionComponent, PropsWithChildren, useState } from "react";
import {
  HashRouter,
  Switch,
  Route,
  Redirect,
  useHistory,
} from "react-router-dom";
import loadable, { LoadableComponent } from "@loadable/component";
import routes from "./router";
import Links from "./Links";
import logo from "@/sites/assets/images/logo-red.png";
import useLocale, { getLocale } from "@/sites/assets/locale/uselocale";
import Configprovider from "@/packages/configprovider";
import zhCN from "@/locales/zh-CN";
import enUS from "@/locales/en-US";
import { BaseLang } from "@/locales/base";
import { Icon } from "@nutui/nutui-react";
import { nav } from "@/config.json";
import TaroDemo from "@/sites/mobile/TaroDemo";
import "@nutui/nutui-react/dist/style.css";

interface Languages {
  [key: string]: BaseLang;
}

const languages: Languages = {
  zhCN,
  enUS,
};

const WithNavRouter = (C: LoadableComponent<any>) => {
  const WithNav: FunctionComponent = (props: PropsWithChildren<any>) => {
    const handleSwitchLocale = () => {
      let href = "";
      let locale = getLocale();
      let location = window.parent.location;
      if (locale == "zh-CN") {
        href = location.href.replace("zh-CN", "en-US");
      } else {
        href = location.href.replace("en-US", "zh-CN");
      }
      location.href = href;
    };
    const pathNames = props.location.pathname.split("/");
    const getComponentName = () => {
      const s = window.location.hash.split("/");
      const cname = s[s.length - 1].toLowerCase();
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
    return (
      <>
        <div id="nav">
          <div
            className="back"
            onClick={() => {
              location.replace(`/nutui/biz/demo.html#/`);
            }}
          >
            <Icon name="left"></Icon>
          </div>
          {getComponentName()["name"]}
          {/* <div className="translate" onClick={() => handleSwitchLocale()}>
            <Icon name="https://img14.360buyimg.com/imagetools/jfs/t1/135168/8/21387/6193/625fa81aEe07cc347/55ad5bc2580c53a6.png"></Icon>
          </div> */}
        </div>
        <C key={Math.random()} />
      </>
    );
  };
  return WithNav;
};
const AppSwitch = () => {
  const [locale] = useLocale();

  return (
    <Configprovider
      locale={languages[((locale as string) || "zh-CN").replace("-", "")]}
    >
      <Switch>
        <Route path="/" exact>
          <div className="index">
            <div className="index-header">
              <img src={logo} alt="" srcSet="" />
              <div className="info">
                <h1>NutUI-React</h1>
                <p>京东风格的轻量级移动端 React 组件库</p>
              </div>
            </div>
            <div className="index-components">
              <Links />
            </div>
          </div>
        </Route>

        {routes.map((item: any, index: number) => {
          const C = loadable(item.component);
          return (
            <Route
              key={Math.random()}
              path={`${item.path}`}
              component={WithNavRouter(C)}
            />
          );
        })}
        <Route path="*-taro">
          <TaroDemo />
        </Route>
        <Route path="*">
          <Redirect
            to={{
              pathname: "/",
            }}
          />
        </Route>
      </Switch>
    </Configprovider>
  );
};
const App = () => {
  return (
    <>
      <HashRouter>
        <AppSwitch></AppSwitch>
      </HashRouter>
    </>
  );
};
export default App;
