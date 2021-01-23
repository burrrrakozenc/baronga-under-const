import React from "react"
import '../styles/style.css'
import Logo from '../image/Amblem.png'
import { Helmet } from "react-helmet"

export default function Home() {
  return <div className="page">
    <Helmet>
      <meta charSet="utf-8" />
      <title>Neferka Design</title>
      <link rel="canonical" href="http://neferka.design" />
    </Helmet>
    <img className="image" src={Logo} alt="Neferka" />
    <h2 className="header">UNDER CONSTRUCTION</h2>
    <div className="download-content">
      <p><a href="https://drive.google.com/file/d/1G6j7sGwrvidxdrPUqkY1-mJmcEfYtKnL/view?usp=sharing" rel="noreferrer" className="download-content">Download </a>our catalogue. For inquiries email eli@neferka.design</p>
      {/* <p className="communication">For inquiries email eli@neferka.design</p> */}
    </div>
    <div className="footer"><p>
      <a target="_blank" rel="noreferrer" href="https://www.facebook.com/neferkadesign">
        FACEBOOK
      </a>
      &nbsp;&nbsp;/&nbsp;&nbsp;
      <a target="_blank" rel="noreferrer" href="https://www.instagram.com/neferka_design/">
        INSTAGRAM
      </a>
    </p>
    </div>
  </div>
}
