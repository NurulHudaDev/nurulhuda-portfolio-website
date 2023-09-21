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
    <div className='contact' ref={contactRef} id='contactSection'>
      <h1>Contact</h1>
      <div class="contact_row">
        <div class="contact_col1">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48898.130539846745!2d91.15421510411059!3d23.434788319580132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37547f249815015d%3A0x549a77e542115f77!2sCumilla!5e0!3m2!1sen!2sbd!4v1695228377010!5m2!1sen!2sbd" width="400" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div class="contact_col2">
        <form  className='from' ref={form} onSubmit={sendEmail}>
          <h2>Contact Us</h2>
          <input type='text' name='user_name' id='' placeholder='Enter Name' />
          <input type='text' name='user_email' id='' placeholder='Enter Email' />
          <textarea name='message' id='' cols='30' rows='10' placeholder='Type Here...' />
          <button type='submit'>Send</button>
        </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;