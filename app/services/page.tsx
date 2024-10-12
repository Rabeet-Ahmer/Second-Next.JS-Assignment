import React from 'react'
import Header from "../components/Header/Header"
import Footer from '../components/Footer/Footer'
import style from "./services.module.css"
import Hero from '../components/Hero/Hero'


const ServicesPage = () => {
  return (
      <>
      <Header/>
      <Hero/>
      <div className={style.main}>
        <h1>"Promising services coming soon!"</h1>
        </div>
        <Footer/>
      </>
  )
}

export default ServicesPage