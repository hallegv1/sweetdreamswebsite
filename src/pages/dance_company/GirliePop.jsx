import "../../styles/DanceCompany.css";
import logo from "../../assets/logos/gp_logo.png";
import jezelleImg from "../../assets/images/lship/jezelle.jpg";
import teaImg from "../../assets/images/lship/tea.jpg";
import gabyImg from "../../assets/images/lship/gaby.JPG";
import valImg from "../../assets/images/lship/val.jpeg";
import { useEffect } from "react";

export function GirliePop() {
  useEffect(() => {
    document.body.classList.add("gp-theme");

    return () => {
      document.body.classList.remove("gp-theme");
    };
  }, []);

  const girliePopText =
    "Girlie Pop is an all femme team created by Justine Wang that creates an empowering space for individual expression and collective growth. Girlie Pop challenges our comfort zones, while further grounding us in our femininity, and strengthening our sense of community.";

  const jezelleBio = (
    <div>
      <p>
        <strong style={{ fontSize: "1.2em" }}>
          Jezelle Edora (she/her)
          <br />
          Captain, Girlie Pop
          <br />
          Founding Member, Variety Pack
        </strong>
      </p>
      <p>
        Jezelle’s interest in dance began in elementary school after watching
        America's Best Dance Crew, which inspired her to start learning
        choreography through YouTube videos and K-pop dances alongside her
        sister for fun. In 2014, she took her first formal dance class at
        Culture Shock San Diego and continued developing her foundation by
        training and performing with teams across the San Diego dance community,
        including Kinections at The Box Dance Studio, NiDC, Otay Ranch High All
        Female, and iLL Habits.
      </p>
      <p>
        After stepping away from dance for several years, Jezelle rediscovered
        her passion for movement while studying abroad in South Korea in 2022,
        where she took weekly dance classes and explored new styles and
        influences. Inspired to reconnect with the community, she returned to
        the San Diego dance scene in 2024 after attending a Candy Melts
        workshop, which led her to audition for Girlie Pop. After completing her
        first season with the team, she stepped into a leadership role as
        Captain.
      </p>
      <p>
        As part of the leadership team at Sweet Dreams Dance Company, Jezelle
        strives to cultivate an inclusive and empowering environment where
        dancers of all experience levels feel supported in their growth. She
        hopes to contribute to the continued development of San Diego’s dance
        community while uplifting others through collaboration and creativity.
      </p>
      <p>
        Outside of dance, Jezelle enjoys traveling, discovering new music,
        fashion, video editing, watching dramas and shows, anime/manga, and
        searching for new places to try desserts and sweet treats.
      </p>
    </div>
  );

  const teaBio = (
    <div>
      <p>
        <strong style={{ fontSize: "1.2em" }}>
          Tea Ramirez (she/they)
          <br />
          Co-Director, Girlie Pop
        </strong>
      </p>
      <p>
        Maite (Tea) A. Ramirez, a.k.a. Xtra Spicy, a.k.a. Trans Chaos, has been
        dancing for as long as she can remember. For her, dancing goes beyond
        the performance, the execution & even the passion. It's about being able
        to express, release, process, and feel things beyond what our words and
        thoughts can. Needless to say, it's an extremely special and necessary
        part of her life.
      </p>
      <p>
        Although she's been a mover her whole life, she truly started to refine
        her skills during high school. Starting on the dance team & all-male
        there she gained a love for hip hop choreo and classical styles like
        jazz, ballet & modern. She trained further with the SoCal junior team
        Underground, where she also learned to create and exist within a larger
        dance community. At UCSD, teams like Sleepless Collective, Sugar Babies,
        D12, SHPK we're her home for 4 years.
      </p>
      <p>
        In her adult life, she's honored to have been a part of the legacy or
        such historic teams in San Diego like SGBM & Culture Shock SD, where she
        still dances today. These teams gave and continue to give her a crucial
        understanding of Hip-Hop history, street styles, club styles, and
        training that pushes her to her limit. However, there is a team that,
        for her, has been specially impactful to her growth as a dancer, leader
        & woman. A team she currently directs with her close friends Justine and
        Val & is filled with some of the most passionate, hard working girlies
        she has ever met.
      </p>
      <p>
        Girlie Pop, for her, has been a beyond affirming experience in EVERY
        sense. Being with the girlies there has filled her with so much love and
        pride that she has not felt in any other space. From general member to
        now director, the journey has not been easy but it has been and
        continues to be intentional and supportive. She hopes to keep
        cultivating this space for seasons to come and can't wait for what GP
        has in store. She is honored to be a part of Sweet Dreams Dance Co. and
        hopes to do her part to create and uphold a legacy of community and
        inspiration.
      </p>
    </div>
  );

  const gabyBio = (
    <div>
      <p>
        <strong style={{ fontSize: "1.2em" }}>
          Gabriela Gutierrez
          <br />
          Captain, Girlie Pop
          <br />
          Founding Member, Variety Pack
        </strong>
      </p>
      <p>
        Gabriela Gutierrez is a dancer with 9 years of experience. Although
        she’s always included dance as an extra curricular, dance became an
        integral part of her life in 2016, when she joined her first Hip-Hop
        dance team, UCSD’s Kasa Danceoff. Through this team, she was introduced
        to the dance community on her campus. That same year, she joined UCSD’s
        only all femme dance team, 4N01, where she continued to be a member for
        several years. In 2018, she became a member of 4N01’s Leadership Board.
      </p>
      <p>
        Gabriela began her journey with Sweet Dream in 2023 when she joined
        Candy Melts at the beginning of the season and Girlie Pop for mid-year
        auditions. She later became a founding member of Sweet Dream’s only
        competitive team, Variety Pack. Gabriela continues to be a member of
        Variety Pack and now holds a Captain position in Girlie Pop. As a team
        member and Captain, Gabriela aspires to cultivate a space with Sweet
        dreams where dancers of all levels can grow in and outside of the dance
        floor.
      </p>
      <p>
        On her free time, Gabriela enjoys spending time in nature whether it be
        camping, hiking, or having a picnic at the park with her cat, Nevie. She
        enjoys all types of art forms, from listening to music, to reading and
        often indulges in crochet sessions.
      </p>
    </div>
  );

  const valBio = (
    <div>
      <p>
        <strong style={{ fontSize: "1.2em" }}>
          Valeria Brown-Binkley (She/Her)
          <br />
          Co-Director Girlie Pop
          <br />
          Founding Member - Girlie Pop, Candy Melts, Variety Pack
        </strong>
      </p>
      <p>
        Valeria is a local San Diegan performer and dance educator. Her dance
        journey began in the fall of 2016 when she made a vow to herself to
        learn how to dance. And that she did! Through taking the time to explore
        varying art forms from Hip-Hop, West African, Heels and more, she
        developed an appreciation for how sound and movement are intertwined. As
        Valeria progressed through her movement pilgrimage, she has had the
        opportunity to dive into choreography-making, performing, and dance
        event coordination. She takes great inspiration from the philosophy that
        'Anything Can Be Dance'.
      </p>
      <p>
        Excited to expand her dance community and knowledge, Valeria joined
        Sweet Dreams as a founding member of both Girlie Pop and Candy Melts in
        2023. Through training alongside and from current and past Sweet Dreams
        leadership, Valeria not only grew as a dancer but as someone who could
        pass down the joy of movement to San Diego County’s youth. Gaining the
        confidence to instruct students yielding from traditional studio spaces
        to non-profit after school programs. Valeria highly resonates with the
        quote, "Dance is an act of courage and vulnerability" (Merce
        Cunningham), and uses it as a precept when guiding others in their own
        dance journey.
      </p>
      <p>
        This growth in leadership and skill led to Valeria being asked in 2024,
        by company director Justine Wang, to join Girlie Pop Leadership for
        Season 3 alongside her [Justine] and Maitea 'Tea' Ramirez. Since then,
        they have strived to cultivate not only a safe space for their all-fem
        members, but an empowering one. One that acknowledges one’s reservations
        with one’s abilities and challenges them to overcome and adopt a
        "Baddie" (affirmative) mindset.
      </p>
      <p>
        During her free time (other than dancing), Valeria can be found hanging
        out with loved ones, visiting different ice cream parlors, reading
        manga, or taking a well needed nap.
      </p>
    </div>
  );

  return (
    <div className="dance-company-container">
      <img src={logo} alt="Girlie Pop Logo" className="dance-company-logo" />
      <a
        href="/about-us/leadership#jezelle"
        className="company-leadership-line"
        style={{
          marginTop: "16px",
          color: "#fff",
          textDecoration: "none",
          fontWeight: "bold",
          fontSize: "1.15rem",
          display: "block",
        }}
      >
        Led by Jezelle Edora, Tea Ramirez, Gabriela Gutierrez, and Valeria
        Brown-Binkley
      </a>
      <p className="dance-company-text">{girliePopText}</p>
      <div style={{ margin: "32px 0", textAlign: "center" }}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/lZ249GITuug"
          title="Girlie Pop Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
