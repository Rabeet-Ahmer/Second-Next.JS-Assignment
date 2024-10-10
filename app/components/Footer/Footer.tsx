import React from 'react'
import Link from "next/link"
import style from "./footer.module.css"
import style2 from "./footer.module.css"
import style3 from "./footer.module.css"
import style4 from "./footer.module.css"

const Footer = () => {
  return (
    <div className={style.main}>
        <p className={style2.text}>GIAIC 2024. All rights reserved.</p>
        <ul className={style3.links}>
            <li><Link href="/services" target="_blank">Our Services</Link></li>
            <li><Link href="/contact" target="_blank">Contact Us</Link></li>
            <li><Link href="">Privacy Policy</Link></li>
        </ul>
        <div className={style4.media}>
        <ul>
            <li><Link href="">Facebook</Link></li>
            <li><Link href="">Instagram</Link></li>
            <li><Link href="">Threads</Link></li>
        </ul>
        </div>
    </div>
  )
}

export default Footer