import React from 'react';

const Contact = () => {
  return (
    <div className="contact">
      <form className="contactForm">

        <h2>Contact Us!</h2>
        <h4>Customer Support Hours:</h4>
        <p>Monday - Friday:  0900-1700 EST</p>
        <p>Weekends: 1200-1800 EST</p>

        <div className="inputFields">
          <input name="name" type="text" placeholder="Full Name" />
          <input name="email" type="email" placeholder="E-mail Address" />
          <textarea placeholder="How can we help you?" />
        </div>

        <button>Submit</button>
      </form>
    </div>
  )
}

export default Contact;
