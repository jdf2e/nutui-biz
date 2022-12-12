import React, { useEffect, useState } from 'react'
import { nav } from '@/config.json'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames';
// @ts-ignore
import { version } from '/package.json'
import config from '@/sites/config/env'
import './header.scss'
import { useHistory, useLocation } from 'react-router-dom'
// import '@/packages/popover/popover.scss'
import {Popover} from '@nutui/nutui-react'

const Header = () => {
  const history = useHistory()
  const location = useLocation()

  const [currLang, setCurrLang] = useState({})
  const [packages, setPackages] = useState([])
  const [searchList, setSearchList] = useState([])
  const [searchIndex, setSearchIndex] = useState(0)
  const [searchCurName, setSearchCurName] = useState('')

  const toHome = () => {
    history.replace('/')
  }

  useEffect(() => {
    nav.forEach((item) => {
      packages.push(...item.packages)
      setPackages(packages)
    })
  }, [])

  useEffect(() => {
    const lang = langs.filter(
      (l) => location.pathname.indexOf(l.locale) > -1
    )[0]
    setCurrLang(lang)
  }, [location])

  const langs = [
    { name: '中文', locale: 'zh-CN' },
    { name: '中文(繁体)', locale: 'zh-TW' },
    { name: 'English', locale: 'en-US' },
    { name: 'Thai', locale: 'th' },
  ]

  const [visible, setVisible] = useState(false)
  const handleSwitchLocale = (e: any) => {
    const classList: string[] = [].slice.call(e.target.classList)
    if (classList.indexOf('curr-lang') > -1) {
      return setVisible(!visible)
    }
    const name = e.target.innerText
    setVisible(!visible)
    const [{ locale }] = langs.filter((l) => name == l.name)

    let link = ''
    if (config.locales.some((l) => window.location.href.indexOf(l) > -1)) {
      link = window.location.href.replace(/\#\/([a-z-]+)/gi, `#/${locale}`)
    } else {
      link = window.location.href.replace(/\#\//gi, `#/${locale}/`)
    }
    window.location.href = link
  }

  useEffect(() => {
  }, [searchList])

  const handleKeyUp = (e) => {
    let sVal = e.target.value;

    if (sVal) {
      setSearchList(packages.filter((item) => {
        if (item.show === false) return false;
          item._name = `/component/${item.name.toLowerCase()}`;
        const rx = new RegExp(sVal, 'gi');
        return rx.test(item.name + ' ' + item.cName + '' + item.desc);
      }))
    } else {
      setSearchList([])
      setSearchIndex(0)
    }

    let setSearchIndex1 = searchIndex;

    if (e.keyCode == 40) {
      setSearchIndex1++;
    }
    if (e.keyCode == 38) {
      setSearchIndex1--;
    }
    if (setSearchIndex1 < 0) {
      setSearchIndex1 = 0;
    }

    const searchList1 = searchList;
    if (searchList1.length > 0) {
      const cName = searchList1[setSearchIndex1] && searchList1[setSearchIndex1].name;
      if (cName) {
        setSearchCurName(cName)
        setSearchIndex(setSearchIndex1)
        if (e.keyCode == 13) {
          history.push('/zh-CN/component/' + searchList1[searchIndex].name);
          setSearchCurName('')
          setSearchList([])
          setSearchIndex(0)
        }
      }
    }
  }

  const handleClick = () => {
    setSearchList([])
    setSearchIndex(0)
  }

  return (
    <div className="doc-header doc-header-black">
      <div className="header-logo">
        <a className="logo-link react" href="#/" onClick={toHome}></a>
        <span className="logo-border"></span>
      </div>
      <div className="header-nav">
        <div className="search-box">
          <input
            type="text"
            className="search-input"
            placeholder="在 NutUI 中搜索"
            onKeyUp={handleKeyUp}
          />
          {
            searchList.length > 0 && <ul className="search-list">
              {
                searchList.map((item, index) => {
                  return <li key={index} onClick={handleClick} className={classNames(searchCurName == item.name ? 'cur' : '')}>
                    <NavLink to={item.name}>
                      {item.name}<span>{item.cName}</span>
                    </NavLink>
                  </li>
                })
              }
            </ul>
          }
        </div>
        <div className="nav-box">
          <ul className="nav-list">
            <li className='nav-item active'><NavLink to="/zh-CN/component/SettleBar">组件</NavLink></li>
            <li className="nav-item"><a className="user-link" target="_blank" href="https://github.com/jdf2e/nutui-biz"></a></li>
          </ul>
        </div>
      </div>
      {/*<div className={'switch'}>*/}
      {/*  <div className={'switch-content'}>*/}
      {/*    <Popover visible={visible} theme={'dark'} onClick={handleSwitchLocale} list={langs}>*/}
      {/*      <span className={'curr-lang'}>{currLang ? currLang['name'] : '中文'}</span>*/}
      {/*    </Popover>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  )
}

export default Header
