import React from 'react'
import Header from "./components/Header/Header"
import Footer from './components/Footer/Footer'
import style from "./page.module.css"

const HomePage = () => {
  return (
    <>
    <Header></Header>
    <div className={style.main}> 
      <h1>This is Home Page</h1>
    </div>
    <Footer></Footer>
    </>
  )
}

export default HomePage