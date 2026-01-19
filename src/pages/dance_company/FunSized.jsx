import '../../styles/DanceCompany.css';

export function FunSized() {
    const funSizedText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    return (
        <div className="dance-company-container">
            <h1>Fun Sized</h1>
            <p className="dance-company-text">
                {funSizedText}
            </p>
        </div>
    );
}