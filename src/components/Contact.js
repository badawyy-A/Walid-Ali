import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    timeline: '',
    details: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS configuration
    const serviceID = 'service_vd9dtd8'; // Replace with your EmailJS service ID
    const templateID = 'template_1dd0w73'; // Replace with your EmailJS template ID
    const publicKey = 'e8ECAdIHmbnWEJuwY'; // Replace with your EmailJS public key

    // Template parameters matching your form fields
    const templateParamsStr = `
    from_name: ${formData.name}
    from_email: ${formData.email}
    phone: ${formData.phone}
    service: ${formData.service}
    timeline: ${formData.timeline}
    message: ${formData.details}
    `;

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      service: formData.service,
      timeline: formData.timeline,
      message: templateParamsStr,
      to_email: 'iamwalidali@gmail.com' // Replace with your email
    };

    // Send email using EmailJS
    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('✅ Message sent successfully! I will get back to you soon.');
        // Reset form
        setFormData({ name: '', email: '', phone: '', service: '', timeline: '', details: '' });
      })
      .catch((error) => {
        console.error('FAILED...', error);
        alert('❌ Failed to send message. Please try again or contact me directly.');
      });
  };

  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Contact me</h2>
      <p className="contact-subtitle">Cultivating Connections: Reach Out And Connect With Me</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="">Service Of Interest</option>
              <option value="branding">Branding</option>
              <option value="ui-ux">UI/UX Design</option>
              <option value="graphics">Graphic Design</option>
              <option value="social-media">Social Media</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <input
              type="text"
              name="timeline"
              placeholder="Timeline"
              value={formData.timeline}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group full-width">
            <textarea
              name="details"
              placeholder="Project Details..."
              rows="5"
              value={formData.details}
              onChange={handleChange}
              required
            ></textarea>
          </div>
        </div>

        <button type="submit" className="btn-send">Send</button>
      </form>
    </section>
  );
};

export default Contact;
