import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { useEffect } from "react";
import {
  AboutUs,
  CEO,
  Classes,
  Contact,
  DanceCompany,
  Home,
  Leadership,
  SweetEscape,
  FunSized,
  CandyMelts,
  GirliePop,
  VarietyPack,
} from "./pages/Pages";
import sdCandyLogo from "./assets/logos/sd_candy.png";

export default function App() {
  useEffect(() => {
    const nav = document.querySelector(".home-nav-container");
    function onScroll() {
      if (window.scrollY > 10) {
        nav?.classList.add("scrolled");
      } else {
        nav?.classList.remove("scrolled");
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="app">
      <nav className="home-nav-container">
        <Link to="/" className="nav-btn">
          Home
        </Link>
        <Link to="/sweet-escape" className="nav-btn">
          Sweet Escape
        </Link>
        {/* <Link to="/classes" className="nav-btn">Classes</Link> */}
        <Link to="/dance-company" className="nav-btn">
          Dance Company
        </Link>
        <Link to="/about-us" className="nav-btn">
          About Us
        </Link>
        <Link to="/contact" className="nav-btn">
          Contact
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sweet-escape" element={<SweetEscape />} />
        {/* <Route path="/classes" element={<Classes />} /> */}

        <Route path="/dance-company" element={<DanceCompany />}>
          <Route path="fun-sized" element={<FunSized />} />
          <Route path="candy-melts" element={<CandyMelts />} />
          <Route path="girlie-pop" element={<GirliePop />} />
          <Route path="variety-pack" element={<VarietyPack />} />
        </Route>

        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/about-us/ceo" element={<CEO />} />
        <Route path="/about-us/leadership" element={<Leadership />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <footer className="app-footer">
        <img
          src={sdCandyLogo}
          alt="sd_candy"
          style={{ height: 64, width: "auto", display: "inline-block" }}
        />
      </footer>
    </div>
  );
}
