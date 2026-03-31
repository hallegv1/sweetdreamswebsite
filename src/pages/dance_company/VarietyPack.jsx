import "../../styles/DanceCompany.css";
import logo from "../../assets/logos/vp_logo.png";
import teamPhoto from "../../assets/images/vp_team.jpg";
import { useEffect } from "react";

export function VarietyPack() {
  useEffect(() => {
    document.body.classList.add("vp-theme");

    return () => {
      document.body.classList.remove("vp-theme");
    };
  }, []);

  const varietyPackText =
    "Variety Pack is an all inclusive competitive team based in San Diego California created by Justine Wang and led by Julian Natividad and Suyeu Kuo that highlights the diversity of skills and talent of each individual dancer. Variety Pack pushes our creative boundaries and continues to challenge ourselves both technically and artistically while building a supportive, driven community.";

  return (
    <div className="dance-company-container">
      <img src={logo} alt="Variety Pack Logo" className="dance-company-logo" />
      <img
        src={teamPhoto}
        alt="Variety Pack team photo"
        className="dance-company-photo"
      />
      <a
        href="/about-us/leadership#julian"
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
        Led by Julian Natividad and Kuo
      </a>
      <p className="dance-company-text">{varietyPackText}</p>
      <div style={{ margin: "32px 0", textAlign: "center" }}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/"
          title="Variety Pack Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ display: "none" }}
        ></iframe>
        <iframe
          src="https://www.instagram.com/reel/DWHhV5xARx1/embed"
          width="360"
          height="480"
          frameBorder="0"
          scrolling="no"
          allowtransparency="true"
          allowFullScreen
          title="Variety Pack Instagram Reel"
          style={{ border: "none", borderRadius: 8, background: "#222" }}
        ></iframe>
      </div>
    </div>
  );
}
