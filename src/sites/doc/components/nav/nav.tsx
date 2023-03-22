import React, { useEffect, useState } from "react";
import { nav, docs } from "@/config.json";
import { NavLink, useHistory } from "react-router-dom";
import "./nav.scss";
import useLocale from "@/sites/assets/locale/uselocale";
import classNames from "classnames";
import RenderDomIntro from "@/sites/doc/components/intro-banner/intro.tsx";

interface NavProps {
  click: (activeName: string) => void;
}

const Nav: React.FunctionComponent<NavProps> = (props) => {
  const history = useHistory();
  const [cNav] = useState<any>(nav);
  const [cDocs] = useState<any>(docs);
  const [lang] = useLocale();
  const [fixed, setFixed] = useState(false);
  const [activeName, setActiveName] = useState<string>("intro");
  const [selected, setSelected] = useState<boolean>(true);
  const scrollNav = () => {
    let top = document.documentElement.scrollTop;
    if (top > 64) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  };
  useEffect(() => {
    if (location.href.includes("start-react")) {
      setActiveName("start-react");
    }
    if (location.href.includes("intro")) {
      setActiveName("intro");
    }
    if (location.href.includes("component")) {
      setActiveName("");
    }
    document.addEventListener("scroll", scrollNav);
  }, []);

  const isGuideNav = location.href.includes("guide") || location.hash === "#/";

  const changeNav = (_nav: any) => {
    props.click("guide");
    setSelected(false);
    setActiveName(_nav.name);
    if (_nav.name.includes("releases")) {
      window.open(_nav.name, "_blank");
    } else if (_nav.name === "start-react") {
      history.push("/zh-CN/guide/start-react");
    } else {
      history.push("/zh-CN/guide/intro");
    }
  };

  useEffect(() => {
    RenderDomIntro();
  }, [history.location.pathname]);

  const handleSwichNav = () => {
    sessionStorage.setItem("biz-env", "PC");
    setSelected(true);
    setActiveName("");
    props.click("component");
  };

  return (
    <div className={`doc-nav ${fixed ? "fixed" : ""}`}>
      <ol>
        <li>指南</li>
        <ul>
          {cDocs.packages.map((_package, index) => {
            return (
              <li
                className={classNames([
                  { active: activeName === _package.name },
                ])}
                key={index}
                onClick={() => changeNav(_package)}
              >
                <div>{_package.cName}</div>
              </li>
            );
          })}
        </ul>
      </ol>
      <ol>
        {cNav.map((cn: any) => {
          return (
            <React.Fragment key={Math.random()}>
              <li>{cn.name}</li>
              <ul>
                {cn.packages.map((cp: any) => {
                  if (!cp.show) return null;
                  return (
                    <NavLink
                      key={Math.random()}
                      activeClassName={selected ? "selected" : ""}
                      to={`${lang ? `/${lang}` : ""}/component/${cp.name}`}
                      onClick={() => handleSwichNav()}
                    >
                      <li>
                        {cp.name}&nbsp;&nbsp;<b>{cp.cName}</b>
                      </li>
                    </NavLink>
                  );
                })}
              </ul>
            </React.Fragment>
          );
        })}
      </ol>
    </div>
  );
};

export default Nav;
