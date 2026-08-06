import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import WhatToExpect from "./components/WhatToExpect";
import HackDayExperience from "./components/HackDayExperience";
import Schedule from "./components/Schedule";
import GetInvolved from "./components/GetInvolved";
import Sponsors from "./components/Sponsors";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <WhatToExpect />
        <HackDayExperience />
        <Schedule />
        <GetInvolved />
        <Sponsors />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
