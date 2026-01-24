import { useState } from 'react';
import '../styles/Contact.css';

export function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, subject, message } = formData;
        const myEmail = "your-email@example.com";
        const subjectEncoded = encodeURIComponent(subject);
        const bodyEncoded = encodeURIComponent(`Name: ${name}\n\nMessage:\n${message}`)
        const mailtoLink = `mailto:${myEmail}?subject=${subjectEncoded}&body=${bodyEncoded}`;
        
        window.location.href = mailtoLink;
    };

    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            <p>Have a question? Send us an email directly!</p>

            <form onSubmit={handleSubmit} className="contact-form">
                <div className="contact-input">
                    <label htmlFor="name">Your Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Jane Doe"
                        required
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>

                <div className="contact-input">
                    <label htmlFor="subject">Subject</label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="Class Inquiry"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                    />
                </div>

                <div className="contact-input">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="5"
                        placeholder="I would like to know more about..."
                        required
                        value={formData.message}
                        onChange={handleChange}
                    />
                </div>

                <button type="submit" className="submit-btn">Send Email</button>
            </form>
        </div>
    );
}