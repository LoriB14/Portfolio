import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // For now, just show a success message
    // In production, you'd send this to a backend or email service
    console.log('Form submitted:', formData);
    setSubmitStatus('Message sent successfully! I will get back to you soon.');
    
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      message: ''
    });

    // Clear status message after 5 seconds
    setTimeout(() => {
      setSubmitStatus('');
    }, 5000);
  };

  return (
    <section id="contact" className="section">
      <h2>Contact Me</h2>
      <p className="contact-intro">
        I'd love to hear from you! Whether you have a question, opportunity, or just want to connect, 
        feel free to reach out.
      </p>
      
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email@example.com"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message here..."
            rows="6"
            required
          />
        </div>

        <button type="submit" className="submit-btn">Send Message</button>

        {submitStatus && (
          <div className="submit-status">{submitStatus}</div>
        )}
      </form>
    </section>
  );
}
