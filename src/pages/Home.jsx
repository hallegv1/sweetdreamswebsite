import '../styles/Home.css';
import logo from '../assets/sddc_full_logo.png';

export function Home() {
    const homeText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    return (
        <div className="home-container">
            <img src={logo} alt="Sweet Dreams Logo" className="home-logo" />

            <p className="home-text">
                {homeText}
            </p>
        </div>
    );
}