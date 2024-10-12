import React from 'react'
import Header from "../components/Header/Header"
import Footer from '../components/Footer/Footer'
import style from "./contact.module.css"
import style2 from "./contact.module.css" 
import Hero from '../components/Hero/Hero'


const ContactPage = () => {
  return (
    <>
    <Header/>
    <Hero/>
    <div className={style.main}>
        <h1>Contacts</h1>
    </div>
    <div className={style2.contacts}>
        <p><b>Gmail:</b> abc@gmail.com</p>
        <p><b>|</b></p>
        <p><b>Phone:</b> 030000909</p>
    </div>
    <Footer/>
    </>
  )
}

export default ContactPage