import React from 'react'
import Header from "../components/Header/Header"
import Footer from '../components/Footer/Footer'
import style from "./contact.module.css"
import style2 from "./contact.module.css" 

const ContactPage = () => {
  return (
    <>
    <Header></Header>
    <div className={style.main}>
        <h1>Contacts</h1>
    </div>
    <div className={style2.contacts}>
        <p><b>Gmail:</b> abc@gmail.com</p>
        <p><b>Phone:</b> 030000909</p>
    </div>
    <Footer></Footer>
    </>
  )
}

export default ContactPage