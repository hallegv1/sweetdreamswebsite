import '../styles/SweetEscape.css';

export function SweetEscape() {
    const sweetEscapeText = 'The event highlights a diversity of artists and celebrates art through the two different mediums of cinematography and live performances';
    return (
        <div className="sweet-escape-container">
            <h1>Sweet Escape: Dance and Film Festival</h1>
            <p className="sweet-escape-text">
                {sweetEscapeText}
            </p>
        </div>
    );
}