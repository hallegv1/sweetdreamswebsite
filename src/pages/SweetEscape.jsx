import "../styles/SweetEscape.css";

export function SweetEscape() {
  const sweetEscapeText =
    "Sweet Escape is a celebration of artistic expression through the intersection of choreography and cinematography. The festival aims to showcase authentic self-expression and compelling story telling, highlight a diversity of talents, and create an unforgettable experience for our audience.";
  return (
    <div className="sweet-escape-container">
      <h1>Sweet Escape: Dance and Film Festival</h1>
      <p className="sweet-escape-text">{sweetEscapeText}</p>
    </div>
  );
}
