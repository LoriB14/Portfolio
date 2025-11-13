import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  const [submitStatus, setSubmitStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');
    
    try {
      // Using Web3Forms free service to send emails
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'e1cee259-6daa-4429-9249-2824cc64a815',
          name: formData.fullName,
          email: formData.email,
          message: formData.message,
          subject: `New Portfolio Contact from ${formData.fullName}`,
          to: 'lbattouk@gmail.com'
        })
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('Message sent successfully! I will get back to you soon. ✨');
        // Reset form
        setFormData({
          fullName: '',
          email: '',
          message: ''
        });
      } else {
        setSubmitStatus('Oops! Something went wrong. Please try again or email me directly at lbattouk@gmail.com');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('Oops! Something went wrong. Please try again or email me directly at lbattouk@gmail.com');
    } finally {
      setIsSubmitting(false);
      // Clear status message after 8 seconds
      setTimeout(() => {
        setSubmitStatus('');
      }, 8000);
    }
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
            placeholder="Your Name"
            required
            disabled={isSubmitting}
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
            disabled={isSubmitting}
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
            disabled={isSubmitting}
          />
        </div>

        <button type="submit" className="submit-btn" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>

        {submitStatus && (
          <div className={`submit-status ${submitStatus.includes('Oops') ? 'error' : 'success'}`}>
            {submitStatus}
          </div>
        )}
      </form>
    </section>
  );
}
