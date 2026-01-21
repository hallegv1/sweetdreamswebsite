import '../../styles/DanceCompany.css';
import logo from '../../assets/logos/cm_logo.png';
import teamPhoto from '../../assets/images/cm_team.jpg';

export function CandyMelts() {
    const candyMeltsText = 'Candy Melts is an all inclusive beginner/intermediate team, created by Justine Wang and under the direction of Cecilia Fridge and Leilani Chung, that connects people to themselves and each other. Candy Melts cultivates our groove foundations, fosters our movement exploration and trains the mentality it takes to be a self-sufficient and life-long student.';
    const directorText = "Director: Justine Wang";

    return (
        <div className="cm-container">
            <img src={logo} alt="Candy Melts Logo" className="dance-company-logo" />
            <h1>Candy Melts</h1>
            <p className="dance-company-text">
                {directorText}
            </p>
            
            <img src={teamPhoto} alt="Candy Melts team photo" className="dance-company-photo" />

            <p className="dance-company-text">
                {candyMeltsText}
            </p>
        </div>
    );
}