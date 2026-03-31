import "../styles/AboutUs.css";
import "../styles/DanceCompany.css";
import justineImg from "../assets/images/lship/justine.jpg";

export function CEO() {
  const justineBio = (
    <div>
      <p>
        <strong style={{ fontSize: "1.2em" }}>
          Justine Wang
          <br />
          CEO of Sweet Dreams Dance
          <br />
          Founder of Girlie Pop, Candy Melts, and Variety Pack
        </strong>
      </p>
      <p>
        Justine Wang is a San Diego-based, Asian-American dancer, teacher, and
        choreographer with over 10 years of experience. Her work centers on
        groove foundations, clarity of movement, and musicality, with a strong
        emphasis on helping dancers develop technical skills and personal
        confidence. With a background in Psychology, Justine incorporates her
        understanding of mindset and personal development into her teaching,
        providing intentional and supportive feedback while also being mindful
        of each dancer’s individual mindset. She strives to create environments
        where dancers feel encouraged to grow, take risks, and express
        themselves authentically.
      </p>
      <p>
        Justine’s love for dance stems from the space it provided her to
        discover herself through movement and through the supportive community
        it fostered. However, as she continued her journey within the dance
        community, she began to notice that many spaces no longer offered the
        same level of accessibility, mentorship, and opportunities for growth
        that she used to experience. These opportunities would often circulate
        through the same groups, leaving many dancers feeling excluded and
        discouraged.
      </p>
      <p>
        Additionally, she also noticed how many talented dancers in San Diego
        were relocating to other cities in order to pursue dance professionally
        and sustain a living in the industry. As someone who deeply values what
        San Diego has given her, Justine became committed to building a stronger
        foundation for dancers to become more financially stable with the hopes
        of keeping them rooted in San Diego. Because of both of these
        challenges, this led her to found Sweet Dreams in 2023.
      </p>
      <p>
        To start with the accessibility issue, Justine founded Candy Melts, a
        beginner-intermediate team catered to beginner dancers who were often
        excluded from the team environments due to a lack of advanced dance
        skills. She later created Girlie Pop, a team dedicated to empowering
        femme-identifying dancers and providing a space for authentic
        self-expression. Her most recent team, Variety Pack, founded in 2025,
        provides a space for intermediate-advanced dancers with opportunities to
        push their creative boundaries, enhance their skill set, and showcase
        their diverse talents.
      </p>
      <p>
        Through Sweet Dreams Dance, Justine aims to build a more sustainable and
        inclusive dance community in San Diego. Her long-term vision is to open
        a dance studio that will allow her to provide fair compensation to
        caring and passionate instructors who respect the art and culture, host
        unique workshops and programs that develop dancers of all levels, and
        create community-centered events that bring together the San Diego Dance
        Community.
      </p>
      <p>
        As a teacher and director, Justine leads with compassion and intention.
        She encourages her dancers to embrace growth through both successes and
        challenges. Her mission is to cultivate dancers who are not only
        technically strong, but also confident, expressive, and deeply connected
        to their community. She believes that resilience, consistency, and
        community are more valuable than perfection.
      </p>
    </div>
  );

  return (
    <div className="dance-company-container">
      <h1>CEO</h1>
      <div className="leaders-container single-column">
        <div className="leader-row">
          <img src={justineImg} alt="Justine Wang" className="leader-img" />
          <p className="leader-bio">{justineBio}</p>
        </div>
      </div>
      <div
        style={{
          margin: "32px 0 12px 0",
          display: "flex",
          justifyContent: "center",
          gap: 24,
          flexWrap: "wrap",
        }}
      >
        <iframe
          src="https://www.instagram.com/p/DR0PayCEu5x/embed"
          width="560"
          height="700"
          frameBorder="0"
          scrolling="no"
          allowtransparency="true"
          allowFullScreen
          title="2025 Beginning Grooves Wrapped Instagram Post"
          style={{
            border: "none",
            borderRadius: 8,
            background: "#222",
            marginBottom: 16,
          }}
        ></iframe>
        <iframe
          src="https://www.instagram.com/reel/DWSmGgRgKsd/embed"
          width="560"
          height="700"
          frameBorder="0"
          scrolling="no"
          allowtransparency="true"
          allowFullScreen
          title="Recent Beginning Grooves Class Instagram Reel"
          style={{ border: "none", borderRadius: 8, background: "#222" }}
        ></iframe>
      </div>
    </div>
  );
}
