import "../../styles/DanceCompany.css";
import logo from "../../assets/logos/cm_logo.png";
import teamPhoto from "../../assets/images/cm_team.jpg";
import ceciImg from "../../assets/images/lship/ceci.jpg";
import laniImg from "../../assets/images/lship/lani.jpg";
import { useEffect } from "react";

export function CandyMelts() {
  useEffect(() => {
    document.body.classList.add("cm-theme");

    return () => {
      document.body.classList.remove("cm-theme");
    };
  }, []);

  const candyMeltsText =
    "Candy Melts is an all inclusive beginner/intermediate team, created by Justine Wang and under the direction of Cecilia Abdon and Leilani Chung, that connects people to themselves and each other. Candy Melts cultivates our groove foundations, fosters our movement exploration and trains the mentality it takes to be a self-sufficient and life-long student.";

  const ceciBio = (
    <div>
      <p>
        <strong style={{ fontSize: "1.2em" }}>
          Cecilia Abdon (she/her)
          <br />
          Executive Assistant
          <br />
          Director & Founder, Fun Sized & Taste Test
          <br />
          Co-Director, Candy Melts
          <br />
          Founding Member, Variety Pack & Girlie Pop
        </strong>
      </p>
      <p>
        Cecilia Abdon is a dance educator and creative leader with over 20 years
        of dance experience. She is passionate about building inclusive training
        environments where dancers of all ages and experience levels can grow
        with confidence, discipline, and joy.
      </p>
      <p>
        A founding member of the company, Cecilia has been part of its journey
        since its debut at Dance For a Cure 2023 with Girlie Pop. She has worked
        closely alongside Justine Wang to help shape the community and vision.
        She has also served as a leader of Candy Melts since its creation in
        2023.
      </p>
      <p>
        Cecilia founded Fun Sized, the company’s first competitive children’s
        team, and has recently launched Taste Test, a program designed to
        support novice dancers who aspire to develop their skills. Through her
        leadership, she continues to expand opportunities for all dancers,
        prioritizing accessibility, mentorship, and a lifelong love of dance.
      </p>
      <p>
        Outside of dance, Cecilia likes to spend time at home with her husband,
        Gener, and 2 cats, Edward and Chesa. When they’re not home, they can be
        found traveling, camping, and spending lots of time with friends, many
        of which are fellow Sweet Dreams members and their partners, also known
        as Sweethearts!
      </p>
    </div>
  );

  const laniBio = (
    <div>
      <p>
        <strong style={{ fontSize: "1.2em" }}>
          Leilani Chung
          <br />
          Co-Director, Candy Melts
          <br />
          Founding Member, Variety Pack
        </strong>
      </p>
      <p>
        Leilani Chung is a dancer and leader with over 5 years of experience.
        She started off as a member of Candy Melts and Girlie Pop in 2023 and
        continued on to be a founding member of Variety Pack. Now, she is
        co-directing Candy Melts alongside Ceci and Justine. She is passionate
        about creating safe and inclusive spaces for dancers to grow and share
        their love for the craft and helping them achieve their goals.
      </p>
      <p>
        Outside of dance, she spends her day as a full-time Product Designer. In
        her down time, she enjoys reading, playing video games and spending time
        with her husband, friends and family.
      </p>
    </div>
  );

  return (
    <div className="dance-company-container">
      <img src={logo} alt="Candy Melts Logo" className="dance-company-logo" />
      <img
        src={teamPhoto}
        alt="Candy Melts team photo"
        className="dance-company-photo"
      />
      <p className="dance-company-text">{candyMeltsText}</p>
      <div className="leaders-container">
        <div className="leader-row">
          <img src={ceciImg} alt="Cecilia Abdon" className="leader-img" />
          <p className="leader-bio">{ceciBio}</p>
        </div>
        <div className="leader-row">
          <img src={laniImg} alt="Leilani Chung" className="leader-img" />
          <p className="leader-bio">{laniBio}</p>
        </div>
      </div>
    </div>
  );
}
