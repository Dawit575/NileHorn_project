import React, { useState } from 'react';
import style from './Contact_form.module.css';

function Contact_Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      alert('Please fill all required fields');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess('Message sent successfully!');

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      setTimeout(() => setSuccess(''), 3000);
    }, 1500);
  };

  return (
    <div className={style.container}>
      <h2 className={style.title}>Get In Touch</h2>

      <form className={style.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name *"
          value={formData.name}
          onChange={handleChange}
          className={style.input}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email *"
          value={formData.email}
          onChange={handleChange}
          className={style.input}
        />

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          className={style.input}
        />

        <textarea
          name="message"
          placeholder="Your Message *"
          value={formData.message}
          onChange={handleChange}
          className={style.textarea}
          rows="5"
        />

        <button type="submit" className={style.button} disabled={loading}>
          {loading ? 'Sending...' : 'Send Message'}
        </button>

        {success && <p className={style.success}>{success}</p>}
      </form>
    </div>
  );
}

export default Contact_Form;
