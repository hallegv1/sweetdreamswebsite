import "../styles/AboutUs.css";
import "../styles/DanceCompany.css";
import teamPhoto from "../assets/images/sdd_team.jpg";
import logo from "../assets/logos/sddc_full_logo.png";
import { Outlet, useLocation, Link } from "react-router-dom";

export function AboutUs() {
  const location = useLocation();
  const mainPage = "/about-us";
  const isMainPage = location.pathname === mainPage;

  const aboutText = (
    <>
      <p className="about-text">
        Founded by Justine Wang, Sweet Dreams Dance Company is a community of
        creatives dedicated to bringing our inner child's sweet dreams to life.
        Through artistic expression and intention organization, we strive to
        cultivate spaces that foster growth, connection, and authenticity.
      </p>
      <p className="about-text">
        Sweet Escape: Dance and Film Festival is more than a showcase, it is a
        space for us to come together through dance and film, uplifting each
        other's voices and creating memories that last. We had the honor of
        hosting our first ever show this past July and it was a massive success
        with 250 audience members, 13 live performances, and 10 video
        submissions. In the current dance community, performance opportunities
        are often provided to the same teams. We wanted to put on this show and
        invite people that we noticed have similar missions as ours, which is to
        provide space for a wider range of dancers. We also opened up public
        submissions for the film section of our show. We hope to continue to
        platform up and coming artists in the community. Not only this, but our
        company also has 4 teams that hope to give a space to those who have not
        yet found a place of belonging.
      </p>
      <p className="about-text">
        Candy Melts is the first beginner/intermediate team in the San Diego
        dance community that doesn't require an audition process and accepts
        everyone who wishes to join. Girlie Pop is an all-femme
        intermediate/advanced team. We noticed that many femme presenting
        dancers were wishing for a space that felt safe and relatable, hence the
        creation of Girlie Pop. Variety Pack is an intermediate/advanced
        competition team.
      </p>
      <p className="about-text">
        The current San Diego community has hundreds of dancers that get
        rejected due to an influx of dancers on competing teams, so we created
        Variety Pack in hopes to give another option to the community to join in
        on the competition season. Fun Sized is our intermediate/advanced team
        for dancers ages 9-14, an age group that is often neglected as most kids
        teams are for really young kids or teenagers.
      </p>
    </>
  );

  if (!isMainPage) {
    return <Outlet />;
  }

  return (
    <div className="dance-company-container">
      <h1>About Us</h1>
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
      <nav className="about-nav-container">
        <Link to="/about-us/ceo" className="about-nav-btn">
          CEO
        </Link>
        <Link to="/about-us/leadership" className="about-nav-btn">
          Leadership
        </Link>
      </nav>
      {aboutText}
    </div>
  );
}
