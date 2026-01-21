import '../styles/Home.css';
import logo from '../assets/sddc_full_logo.png';

export function Home() {
    const aboutUs = 'Founded by Justine Wang, Sweet Dreams Dance is a community of creatives dedicated to bringing our inner child’s sweet dreams to life. Through artistic expression and intention organization, we strive to cultivate spaces and create art that foster growth, connection, and authenticity.';
    return (
        <div className="home-container">
            <img src={logo} alt="Sweet Dreams Logo" className="home-logo" />

            <p className="home-text">
                {aboutUs}
            </p>
        </div>
    );
}