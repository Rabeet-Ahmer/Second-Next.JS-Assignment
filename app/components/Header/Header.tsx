import React from 'react'
import Link from "next/link"
import style from "./header.module.css"
import style2 from "./header.module.css"
import style3 from "./header.module.css"

const Header = () => {
  return (
    <div className={style.main}>
        <h1 className={style2.logo}>OOPS</h1>
        <ul className={style3.links}>
            <li><Link href="/" target="_blank">Home</Link></li>
            <li><Link href="/contact" target="_blank">Contact Us</Link></li>
            <li><Link href="/services" target="_blank">Services</Link></li>
        </ul>
    </div>
  )
}

export default Header