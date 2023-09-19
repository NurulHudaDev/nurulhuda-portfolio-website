import React, { useRef } from 'react';
import './Contact.css';
import { useNav } from '../Hooks/useNav';
import Laptop from '../../images/laptop.jpg';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const contactRef = useNav('Contact')

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8i803bg', 'template_kpbdtjn', form.current, 'qFhdLIbnek-uWWXc5')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <section className='contact' ref={contactRef} id='contactSection'>
      <h1>Contact</h1>
      <div class="contact_row">
        <div class="contact_col">
          <img src={Laptop} alt='' />
        </div>
        <div class="contact_col">
        <form  className='from' ref={form} onSubmit={sendEmail}>
          <h2>Contact</h2>
          <input type='text' name='user_name' id='' placeholder='Enter Name' />
          <input type='text' name='user_email' id='' placeholder='Enter Email' />
          <textarea name='message' id='' cols='30' rows='10' placeholder='Type Here...' />
          <button type='submit'>Send</button>
        </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;