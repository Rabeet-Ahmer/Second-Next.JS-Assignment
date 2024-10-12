import React from 'react'
import Header from "./components/Header/Header"
import Footer from './components/Footer/Footer'
import style from "./page.module.css"
import Hero from './components/Hero/Hero'

const HomePage = () => {
  return (
    <>
    <Header/>
    <Hero/>
    <div className={style.main}> 
      <h1>This is Home Page</h1>
    </div>
    <Footer/>
    </>
  )
}

export default HomePage