import "../../styles/DanceCompany.css";
import logo from "../../assets/logos/vp_logo.png";
import teamPhoto from "../../assets/images/vp_team.jpg";
import julianImg from "../../assets/images/lship/julian.JPG";
import suyeuImg from "../../assets/images/lship/suyeu.jpg";
import { useEffect } from "react";

export function VarietyPack() {
  useEffect(() => {
    document.body.classList.add("vp-theme");

    return () => {
      document.body.classList.remove("vp-theme");
    };
  }, []);

  const varietyPackText =
    "Variety Pack is an all inclusive competitive team based in San Diego California created by Justine Wang and led by Julian Natividad and Suyeu Kuo that highlights the diversity of skills and talent of each individual dancer. Variety Pack pushes our creative boundaries and continues to challenge ourselves both technically and artistically while building a supportive, driven community.";

  const julianBio = `Julian Natividad (he/they)
Founding Member and Captain, Variety Pack

Julian is a dancer and creative with over 12 years of leadership and multimedia experience. More than just a dancer, he is passionate about inspiring others through storytelling and building worlds through dance and other mediums.

Starting as a b-boy in 2012, he transitioned slowly into hip-hop choreography and became a captain for his high school dance team. After taking on various leadership positions over the years, he is currently a captain on Variety Pack after having met Justine Wang and being introduced to Sweet Dreams in 2023.

Through his leadership inside and out of the dance world, Julian seeks to cultivate environments where authenticity takes the forefront, supplemented by hard work and passion. A community builder in his own right, Julian aspires to collaborate and reaffirm the joy of expression, a necessary form of resistance.

Outside of dance, you can find Julian as a filmmaker, writer, a D&D game master, and an actor. He enjoys traveling, fashion, spending time with his loved ones, watching films and television, and worldbuilding for his lifelong passion project.`;

  const suyeuBio = (
    <div>
      <p><strong style={{ fontSize: '1.2em' }}>Kuo (she/they)<br />Co-Captain & Founding Member of Variety Pack<br />Member of Girlie Pop (Gen 2 - Present)</strong></p>
      <p>Kuo is a dancer and creative with almost 25 years of experience. They currently co-captain Variety Pack (Sweet Dream’s competitive team) and are a member of Girlie Pop for the third year in a row. As a captain, Kuo is responsible for collaborating with the director and other co-captain on training the team and building a competitive set in terms of choreography, blocking, and cleaning, which has resulted in Variety Pack getting fourth place at the team’s first competition.</p>
      <p>As a child, Kuo first studied ballet, jazz, tap, and Chinese dance, before dancing competitively starting at 9 years old. Through their teenage years, they took additional classes in contemporary, musical theater, acting, and hip hop choreography within studio and convention settings. Kuo’s highest achievement as a child was 6th place soloist at a national dance competition. In college, Kuo completed a minor in dance, which required performing in department-wide productions. They also danced on multiple exhibition teams during their college years, which gave them opportunities to choreograph and exhibit their own works. Post-graduation, Kuo took a one year break from dance to figure out what their next step in life would be, but dance was too strong of a passion for them to give up; they returned to dancing on a local competitive hip hop choreography team. On that competition team, Kuo was asked to join the board as an administrator for three years. The team later rebranded, so Kuo co-founded and led the new competitive team in an executive role for another four years. They left due to reasons unrelated to dance and joined Sweet Dreams.</p>
      <p>Kuo is passionate about creating a space for dancers to train to be the best dancers they can be and show that within a competitive setting. They hope that every member of the company aims to be the best they can be within any given day in a way that makes them proud of themselves. Outside of dance, they spend time with their partner, pets, and friends.</p>
    </div>
  );

  return (
    <div className="dance-company-container">
      <img src={logo} alt="Variety Pack Logo" className="dance-company-logo" />
      <img
        src={teamPhoto}
        alt="Variety Pack team photo"
        className="dance-company-photo"
      />
      <p className="dance-company-text">
        {varietyPackText}
      </p>
      <div className="leaders-container">
        <div className="leader-row">
          <img src={julianImg} alt="Julian Natividad" className="leader-img" />
          <p className="leader-bio">{julianBio}</p>
        </div>
        <div className="leader-row">
          <img src={suyeuImg} alt="Suyeu Kuo" className="leader-img" />
          <p className="leader-bio">{suyeuBio}</p>
        </div>
        </div>
    </div>
  );
}
