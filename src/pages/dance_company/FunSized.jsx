import '../../styles/DanceCompany.css';
import logo from '../../assets/logos/fs_logo.png';
import { useEffect } from 'react';

export function FunSized() {
    useEffect(() => {
        document.body.classList.add('fs-theme');

        return () => {
            document.body.classList.remove('fs-theme');
        };
    }, []);

    const funSizedText = "Fun Sized is an intermediate/advanced choreography team for dancers ages 9-14 created by Cecilia Fridge. Fueled by a shared passion for dance, Fun Sized cultivates a supportive community for its members to grow in all aspects, from technique and artistry to teamwork and discipline. It's a fun team for the fun sized.";
    const directorText = "Director: Cecilia Fridge";

    return (
        <div className="dance-company-container">
            <img src={logo} alt="Fun Sized Logo" className="dance-company-logo" />
            <p className="dance-company-text">
                {directorText}
            </p>
            <p className="dance-company-text">
                {funSizedText}
            </p>

        </div>
    );
}