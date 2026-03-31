import "../../styles/DanceCompany.css";
import logo from "../../assets/logos/cm_logo.png";
import teamPhoto from "../../assets/images/cm_team.jpg";
import { useEffect } from "react";

export function CandyMelts() {
  useEffect(() => {
    document.body.classList.add("cm-theme");

    return () => {
      document.body.classList.remove("cm-theme");
    };
  }, []);

  const candyMeltsText =
    "Candy Melts is an all inclusive beginner/intermediate team, created by Justine Wang and under the direction of Cecilia Abdon and Leilani Chung, that connects people to themselves and each other. Candy Melts cultivates our groove foundations, fosters our movement exploration and trains the mentality it takes to be a self-sufficient and life-long student.";

  return (
    <div className="dance-company-container">
      <img src={logo} alt="Candy Melts Logo" className="dance-company-logo" />
      <img
        src={teamPhoto}
        alt="Candy Melts team photo"
        className="dance-company-photo"
      />
      <a
        href="/about-us/leadership#ceci"
        className="company-leadership-line"
        style={{
          marginTop: "16px",
          color: "#fff",
          textDecoration: "none",
          fontWeight: "bold",
          fontSize: "1.15rem",
          display: "block",
        }}
      >
        Led by Cecilia Abdon and Leilani Chung
      </a>
      <p className="dance-company-text">{candyMeltsText}</p>
      <div style={{ margin: "32px 0", textAlign: "center" }}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/CMphXZk-4qM"
          title="Candy Melts Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div style={{ margin: "16px 0 32px 0", textAlign: "center" }}>
        <iframe
          src="https://www.instagram.com/reel/DWUnFKWAdMm/embed"
          width="360"
          height="480"
          frameBorder="0"
          scrolling="no"
          allowtransparency="true"
          allowFullScreen
          title="Candy Melts Instagram Reel"
          style={{ border: "none", borderRadius: 8, background: "#222" }}
        ></iframe>
      </div>
    </div>
  );
}
