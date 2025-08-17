import React from 'react'
import './Contact.css'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {

    const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "0168e512-ea6c-46b5-afde-19c2a18b2c51");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
      
    }
  };


  return (

    <div id="contact" className="contact">
        <div className="contact-title">
            <h1>Get In Touch</h1>
            <div className="contact-underline"></div>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I’d be glad to connect with you. Whether it’s about potential opportunities or feedback on my work, please don’t hesitate to get in touch.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="Mail Icon" />
                        <p>Email: ramithstewart2004@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="Location Icon" />
                        <p>Location: Bhubneswar, India</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt="Call Icon" />
                        <p>Phone: +91 9937605713</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" placeholder='Your Name' required />

                <label htmlFor="email">Email:</label>
                <input type="email" name="email" placeholder='Your Email' required />

                <label htmlFor="message">Message:</label>
                <textarea  name="message" rows="8" placeholder='Your Message' required></textarea>

                <button type="submit" className='contact-submit btn btn-success' style={{width: '50%', padding: '12px 20px', alignItems: 'center'}}>Send</button>
            </form>
        </div>
        
    </div>
  )
}

export default Contact