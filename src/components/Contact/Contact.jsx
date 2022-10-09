import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {ImWhatsapp} from 'react-icons/im'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_h560gw4', 'template_fvtywdm', form.current, 'QT79tqH5-Gb6kQmrL')
      
    e.target.reset()
  };

  return (
    <section id="contact">
      <h5> Get In Touch </h5>
      <h2> Contact </h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className= "contact_option">
            <MdOutlineEmail className="contact_option-icon"/>
            <h4>Email</h4>
            <h5>emmanuelobiora94@gmail.com</h5>
            <a href="mailto:emmanuelobiora94@gmail.com" rel="noreferrer" target="_blank">Send a message</a>
          </article>

          <article className= "contact_option">
            <RiMessengerLine className="contact_option-icon"/>
            <h4>Messenger</h4>
            <h5>Emmanuel Obiora</h5>
            <a href="https://m.facebook.com/emmanuelobiora" rel="noreferrer" target="_blank">Send a message</a>
          </article>

          <article className= "contact_option">
            <ImWhatsapp className="contact_option-icon"/>
            <h4>Whatsapp</h4>
            <h5>+2348132044517</h5>
            <a href="https://api.whatsapp.com/send?phone+2348132044517" rel="noreferrer" target="_blank">Send a message</a>
          </article>
        </div>
        <div>
          <form ref = {form} onSubmit = {sendEmail}>
            <input type="text" name='name' placeholder='Your Full Name' required />
            <input type="text" name="email" placeholder='Your Email' required />
            <textarea name="" id="message" rows="7" placeholder='Your message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
