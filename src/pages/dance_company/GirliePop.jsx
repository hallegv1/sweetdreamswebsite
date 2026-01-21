import '../../styles/DanceCompany.css';
import logo from '../../assets/logos/gp_logo.png';

export function GirliePop() {
    const girliePopText = 'Girlie Pop is an all femme team created by Justine Wang that creates an empowering space for individual expression and collective growth. Girlie Pop challenges our comfort zones, while further grounding us in our femininity, and strengthening our sense of community.';
    const directorsAndCaptainsText = 'Directors: Justine Wang, Valeria Brown-Binkley, and Tea Ramirez\nCaptains: Jezelle Edora and Gabriela Gutierrez';

    return (
        <div className="gp-container">
            <img src={logo} alt="Girlie Pop Logo" className="dance-company-logo" />

            <h1>Girlie Pop</h1>
            <p className="dance-company-text">
                {directorsAndCaptainsText}
            </p>
            <p className="dance-company-text">
                {girliePopText}
            </p>
        </div>
    );
}