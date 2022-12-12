import React, { useEffect, useState } from 'react'
import { nav } from '@/config.json'
import { NavLink } from 'react-router-dom'
import './nav.scss'
import useLocale from '@/sites/assets/locale/uselocale'

const Nav = () => {
  const [cNav] = useState<any>(nav)
  const [lang] = useLocale()
  const [fixed, setFixed] = useState(false)
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
  const currentComponents = ['SettleBar', 'CartBar', 'SearchHistory', 'Card', 'Address']
  return (
    <div className={`doc-nav ${fixed ? 'fixed' : ''}`}>
      <ol>
        {cNav.map((cn: any) => {
          return (
            <React.Fragment key={Math.random()}>
              <li>{cn.name}</li>
              <ul>
                {cn.packages.map((cp: any) => {
                  if (!cp.show) return null
                  return (
                    !currentComponents.includes(cp.name) ? <a
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
      </ol>
    </div>
  )
}

export default Nav
