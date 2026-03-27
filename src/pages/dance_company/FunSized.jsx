import "../../styles/DanceCompany.css";
import logo from "../../assets/logos/fs_logo.png";
import ceciImg from "../../assets/images/lship/ceci.jpg";
import { useEffect } from "react";

export function FunSized() {
  useEffect(() => {
    document.body.classList.add("fs-theme");

    return () => {
      document.body.classList.remove("fs-theme");
    };
  }, []);

  const funSizedText =
    "Fun Sized is an intermediate/advanced choreography team for dancers ages 9-14 created by Cecilia Fridge. Fueled by a shared passion for dance, Fun Sized cultivates a supportive community for its members to grow in all aspects, from technique and artistry to teamwork and discipline. It's a fun team for the fun sized.";

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

  return (
    <div className="dance-company-container">
      <img src={logo} alt="Fun Sized Logo" className="dance-company-logo" />
      <p className="dance-company-text">{funSizedText}</p>
      <div className="leaders-container">
        <div className="leader-row">
          <img src={ceciImg} alt="Cecilia Fridge" className="leader-img" />
          <p className="leader-bio">{ceciBio}</p>
        </div>
      </div>
    </div>
  );
}
