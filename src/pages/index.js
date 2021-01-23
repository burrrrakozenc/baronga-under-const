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
    <img className="img" src={Logo} alt="Neferka" />
    <h2 className="h2">UNDER CONSTRUCTION</h2>
  </div>
}
