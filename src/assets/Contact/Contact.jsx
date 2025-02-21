import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import "./Contact.css"; // Import External CSS

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <div className="contact-container">
      {/* Hero Section */}
      <section className="contact-page">
        <div className="contact-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="contact-title">Contact Us</h1>
            <p className="contact-description">Get in touch with our team</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="contact-section">
        <div className="contact-grid">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="contact-form"
          >
            <h2>Send us a message</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" required />

              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" required />

              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" required />

              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5" required></textarea>

              <button type="submit" className="submit-button">
                <Send size={20} /> Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="contact-details"
          >
            <h2>Contact Information</h2>

            <div className="contact-info">
              <Mail className="info-icon" />
              <div>
                <strong>Email</strong>
                <p>pataslk@info.com</p>
              </div>
            </div>

            <div className="contact-info">
              <Phone className="info-icon" />
              <div>
                <strong>Phone</strong>
                <p>+94 76 300 1274</p>
              </div>
            </div>

            <div className="contact-info">
              <MapPin className="info-icon" />
              <div>
                <strong>Office Location</strong>
                <p>Colombo, Sri Lanka</p>
              </div>
            </div>

            {/* Google Map */}
            <div className="contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.891012135239!2d79.8612436750385!3d6.927078993091221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259264874e229%3A0x2c8cf0f8c6b5aa2d!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1712345678901!5m2!1sen!2sus"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
