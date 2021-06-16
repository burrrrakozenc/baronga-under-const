import React from "react"
import '../styles/style.css'
import Logo from '../image/logo.png'
import { Helmet } from "react-helmet"

export default function Home() {
  return <div className="page">
    <Helmet>
      <meta charSet="utf-8" />
      <title>BARONGA</title>
      <link rel="canonical" href="http://neferka.design" />
    </Helmet>
    <img className="image" src={Logo} alt="Baronga" />
    <h2 className="header">BARONGA</h2>
    <h5 className="sub-header">Yakında, yeni tasarımıyla sizlerle.</h5>
  </div>
}