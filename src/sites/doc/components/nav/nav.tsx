import React, { useEffect, useState } from 'react'
import { nav, docs } from '@/config.json'
import { NavLink, useHistory } from 'react-router-dom'
import './nav.scss'
import useLocale from '@/sites/assets/locale/uselocale'
import classNames from 'classnames'

const Nav = () => {
  const history = useHistory()
  const [cNav] = useState<any>(nav)
  const [cDocs] = useState<any>(docs)
  const [lang] = useLocale()
  const [fixed, setFixed] = useState(false)
  const [activeName, setActiveName] = useState<string>('intro')
  const scrollNav = () => {
    let top = document.documentElement.scrollTop
    if (top > 64) {
      setFixed(true)
    } else {
      setFixed(false)
    }
  }
  useEffect(() => {
    document.addEventListener('scroll', scrollNav)
  }, [])

  const isGuideNav = location.href.includes('guide') || location.hash === '#/';

  const changeNav = (_nav: any) => {
    setActiveName(_nav.name)
    history.push(_nav.name)
  }

  return (
    <div className={`doc-nav ${fixed ? 'fixed' : ''}`}>
      { isGuideNav ? <ol><ul>
        {
          cDocs.packages.map((_package, index) => {
            return <li className={classNames([{active: activeName === _package.name}])} key={index} onClick={changeNav.bind(this, _package)}>
              <div>{_package.cName}</div>
            </li>
          })
        }
      </ul></ol> : <ol>
        {cNav.map((cn: any) => {
          return (
            <React.Fragment key={Math.random()}>
              <li>{cn.name}</li>
              <ul>
                {cn.packages.map((cp: any) => {
                  // if (!cp.show) return null
                  return (
                    !cp.show ? <a
                    key={Math.random()}
                  >
                    <li style={{color: '#ccc', cursor: 'not-allowed'}}>
                      {cp.name}&nbsp;&nbsp;<b>{cp.cName}</b>
                    </li>
                  </a> : <NavLink
                      key={Math.random()}
                      activeClassName="selected"
                      to={`${lang ? `/${lang}` : ''}/component/${cp.name}`}
                    >
                      <li>
                        {cp.name}&nbsp;&nbsp;<b>{cp.cName}</b>
                      </li>
                    </NavLink>
                  )
                })}
              </ul>
            </React.Fragment>
          )
        })}
      </ol>}
    </div>
  )
}

export default Nav
