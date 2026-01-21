import '../styles/DanceCompany.css';
import teamPhoto from '../assets/images/sdd_team.jpg';
import { Link, Outlet, useLocation } from 'react-router-dom';

export function DanceCompany() {
    const location = useLocation();
    const mainPage = '/dance-company';
    const isMainPage = location.pathname === mainPage;

    if (!isMainPage) {
        return (
            <div className="subpage-container">
                <Link to={mainPage} className="back-btn">
                    ← Back to Dance Company
                </Link>
                <Outlet />
            </div>
        );
    }

    const danceCompanyText = 'Lorem ipsum dolor sit amet...';

    return (
        <div className="dance-company-container">
            <h1>Dance Company</h1>
            <img src={teamPhoto} alt="Dance Company team photo" className="dance-company-photo" />
            <p className="dance-company-text">{danceCompanyText}</p>

            <nav className="dance-company-nav-container">
                <Link to={mainPage} className="nav-btn">Dashboard</Link>
                <Link to="/dance-company/fun-sized" className="nav-btn">Fun Sized</Link>
                <Link to="/dance-company/candy-melts" className="nav-btn">Candy Melts</Link>
                <Link to="/dance-company/girlie-pop" className="nav-btn">Girlie Pop</Link>
                <Link to="/dance-company/variety-pack" className="nav-btn">Variety Pack</Link>
            </nav>
        </div>
    );
}