import "../styles/DanceCompany.css";
import teamPhoto from "../assets/images/sdd_team.jpg";
import logo from "../assets/logos/sddc_full_logo.png";
import { Link, Outlet, useLocation } from "react-router-dom";

export function DanceCompany() {
  const location = useLocation();
  const mainPage = "/dance-company";
  const isMainPage = location.pathname === mainPage;

  if (!isMainPage) {
    return (
      <div>
        <Link to={mainPage} className="back-btn">
          ← Back
        </Link>
        <Outlet />
      </div>
    );
  }

  const aboutUs = `Sweet Dreams Dance is a San Diego-based dance organization dedicated to building an inclusive, supportive, and growth-oriented community for dancers of all ages, backgrounds, and experience levels. Founded in 2023 by Justine Wang, Sweet Dreams was created to expand opportunities and accessibility for dancers who may not traditionally have access to team spaces, mentorship, or professional development within the local dance scene. Sweet Dreams Dance is now a community of creatives dedicated to bringing our inner child’s sweetest dreams to life. Through artistic expression and intention organization, we strive to cultivate spaces and create art that foster growth, connection, and authenticity.

Sweet Dreams is composed of four different teams that support dancers at different stages of their journey.\nCandy Melts focuses on beginner-intermediate dancers by developing their groove foundations and fostering the mindset needed to be self-sufficient, professional dancers. Girlie Pop provides a space for femme-identifying dancers for the exploration of authentic self-expression. Variety Pack is an intermediate-advanced competitive team dedicated to unlocking its dancer’s potentials and pushing creative boundaries. Fun-Sized is a kids’ team focused on dancers ages 17 and under, providing them a supportive space to grow in technique, teamwork, and discipline. 

To showcase the talents of these teams as well as other San Diego artists, along with the unique expression of cinematography, Sweet Dreams created Sweet Escape. Sweet Escape is our annual Dance and Film Festival where we celebrate the intersection of dance choreography and film cinematography. is a celebration of artistic expression through the intersection of choreography and cinematography. 

As Sweet Dreams continues to grow and hosts more workshops, programs, and events, it remains grounded in its values of serving the community and fostering growth. Sweet Dreams Dance’s long-term vision is to establish a physical studio space in San Diego that provides opportunities for dancers and instructors alike. Sweet Dreams dance aims to offer fair compensation for its instructors, create unique workshops for dancers of all levels, and host community-centered events that leaves a lasting impact on the San Diego dance community.`;

  return (
    <div className="dance-company-container">
      <img
        src={logo}
        alt="Sweet Dreams Dance logo"
        className="dance-company-logo"
      />
      <img
        src={teamPhoto}
        alt="Dance Company team photo"
        className="dance-company-photo"
      />
      <p className="dance-company-text">{aboutUs}</p>
      <nav className="dance-company-nav-container">
        <Link to="/dance-company/fun-sized" className="dance-company-nav-btn">
          Fun Sized
        </Link>
        <Link to="/dance-company/candy-melts" className="dance-company-nav-btn">
          Candy Melts
        </Link>
        <Link to="/dance-company/girlie-pop" className="dance-company-nav-btn">
          Girlie Pop
        </Link>
        <Link
          to="/dance-company/variety-pack"
          className="dance-company-nav-btn"
        >
          Variety Pack
        </Link>
      </nav>
    </div>
  );
}
