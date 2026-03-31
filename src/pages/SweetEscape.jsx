import "../styles/SweetEscape.css";
import sweetEscapeImg from "../assets/images/sweetescape.jpg";

export function SweetEscape() {
  const sweetEscapeText =
    "Sweet Escape is a celebration of artistic expression through the intersection of choreography and cinematography. The festival aims to showcase authentic self-expression and compelling story telling, highlight a diversity of talents, and create an unforgettable experience for our audience.";
  return (
    <div className="sweet-escape-container">
      <h1>Sweet Escape: Dance and Film Festival</h1>
      <img
        src={sweetEscapeImg}
        alt="Sweet Escape festival"
        className="sweet-escape-img"
        style={{
          maxWidth: "600px",
          width: "100%",
          height: "auto",
          display: "block",
          margin: "0 auto 24px auto",
        }}
      />
      <p className="sweet-escape-text">{sweetEscapeText}</p>
    </div>
  );
}
