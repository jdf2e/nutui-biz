import React from 'react'
import './TaroDemo.scss'
import logo from '../assets/images/logo-red.png'

const TaroDemo = () => {
  return (
    <div className="index">
      <div className="index-header">
        <img src={logo} alt="" srcSet="" />
        <div className="info">
          <h1>NutUI-React</h1>
          <p>请使用微信扫描下方二维码体验</p>
        </div>
      </div>
      <div className="index-wxcode">
        <img
          src="https://img11.360buyimg.com/imagetools/jfs/t1/117193/21/28934/19545/6323e0a4Ea936afda/277e70088c9749cf.jpg"
          width="200"
        />
      </div>
    </div>
  )
}

export default TaroDemo
