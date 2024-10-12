import React from 'react'
import style from "./hero.module.css"
import style2 from "./hero.module.css"
import style3 from "./hero.module.css"
import style4 from "./hero.module.css"

const Hero = () => {
  return (
    <>
    <div className={style.main}>
        <h1 className={style2.h1}>Welcome To My Website!</h1>
        <p className={style3.p}>We create one of the best Tools for your daily work.</p>
    </div>
    </>
  )
}

export default Hero