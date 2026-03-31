import { useState } from "react";
import "../styles/Contact.css";
import sddLogo from "../assets/logos/sddc_full_logo.png";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, subject, message } = formData;
    const myEmail = "your-email@example.com";
    const subjectEncoded = encodeURIComponent(subject);
    const bodyEncoded = encodeURIComponent(
      `Name: ${name}\n\nMessage:\n${message}`,
    );
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
        <button type="submit" className="submit-btn">
          Send Email
        </button>
      </form>
      <div style={{ marginTop: 40, textAlign: "center" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 32,
            flexWrap: "wrap",
            marginTop: 16,
          }}
        >
          {/* Instagram embed (profile embeds are limited, so fallback to link if not supported) */}
          <div style={{ minWidth: 320, maxWidth: 400 }}>
            <iframe
              src="https://www.instagram.com/sweetdreamsdance/embed"
              width="320"
              height="440"
              frameBorder="0"
              scrolling="no"
              allowtransparency="true"
              allowFullScreen
              title="Instagram Profile Embed"
              style={{ border: "none", borderRadius: 12, background: "#222" }}
            ></iframe>
            <div>
              <a
                href="https://www.instagram.com/sweetdreamsdance/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: 18,
                  textDecoration: "underline",
                }}
              >
                @sweetdreamsdance
              </a>
            </div>
          </div>
          {/* YouTube embed (Candy Melts video) */}
          <div style={{ minWidth: 320, maxWidth: 400, textAlign: "center" }}>
            <iframe
              width="360"
              height="203"
              src="https://www.youtube.com/embed/CMphXZk-4qM"
              title="Candy Melts Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{
                border: "none",
                borderRadius: 12,
                background: "#222",
                marginBottom: 8,
              }}
            ></iframe>
            <div>
              <a
                href="https://www.youtube.com/@SweetDreamsDanceCo"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: 18,
                  textDecoration: "underline",
                  marginTop: 8,
                }}
              >
                YouTube
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
