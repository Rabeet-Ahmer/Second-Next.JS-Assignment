import React from 'react'
import Header from "../components/Header/Header"
import Footer from '../components/Footer/Footer'
import style from "./services.module.css"

const ServicesPage = () => {
  return (
      <>
      <Header></Header>
      <div className={style.main}>
        <h1>"Promising services coming soon!"</h1>
    </div>
        <Footer></Footer>
      </>
  )
}

export default ServicesPage