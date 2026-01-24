import '../../styles/DanceCompany.css';
import logo from '../../assets/logos/gp_logo.png';
import { useEffect } from 'react';

export function GirliePop() {
    useEffect(() => {
        document.body.classList.add('gp-theme');

        return () => {
            document.body.classList.remove('gp-theme');
        };
    }, []);

    const girliePopText = 'Girlie Pop is an all femme team created by Justine Wang that creates an empowering space for individual expression and collective growth. Girlie Pop challenges our comfort zones, while further grounding us in our femininity, and strengthening our sense of community.';
    const directorsAndCaptainsText = 'Directors: Justine Wang, Valeria Brown-Binkley, and Tea Ramirez\nCaptains: Jezelle Edora and Gabriela Gutierrez';

    return (
        <div className="dance-company-container">
            <img src={logo} alt="Girlie Pop Logo" className="dance-company-logo" />
            <p className="dance-company-text">
                {directorsAndCaptainsText}
            </p>
            <p className="dance-company-text">
                {girliePopText}
            </p>
        </div>
    );
}