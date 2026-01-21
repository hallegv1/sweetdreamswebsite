import '../../styles/DanceCompany.css';
import logo from '../../assets/logos/vp_logo.png';
import teamPhoto from '../../assets/images/vp_team.jpg';

export function VarietyPack() {
    const varietyPackText = 'Variety Pack is an all inclusive competitive team created by Justine Wang that highlights the diversity of skills and talent of each individual dancer. Variety Pack pushes our creative boundaries and continues to challenge ourselves both technically and artistically while building a supportive, driven community.';
    const directorsAndCaptainsText = 'Director: Justine Wang\nCaptains: Suyeu Kuo and Julian Natividad';

    return (
        <div className="vp-container">
            <img src={logo} alt="Variety Pack Logo" className="dance-company-logo" />

            <h1>Variety Pack</h1>
            <p className="dance-company-text">
                {directorsAndCaptainsText}
            </p>

            <img src={teamPhoto} alt="Variety Pack team photo" className="dance-company-photo" />

            <p className="dance-company-text">
                {varietyPackText}
            </p>
        </div>
    );
}