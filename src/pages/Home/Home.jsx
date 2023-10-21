import React from "react";
import Header from "../../components/Header/Header";
import Intro from "./Intro";
import About from "./About";
import Experiences from "./Experiences";
import Projects from "./Projects";
import Education from "./Education";
import Contact from "./Contact";
import Footer from "./Footer";
import LeftSider from "./LeftSider";
import { useSelector } from "react-redux";

const Home = () => {
  const { portfolioData } = useSelector((state) => state.root);

  return (
    <div>
      <Header />
      {/* if portfolio data is null you would not be shown any data */}
      {portfolioData && (
        <div className="bg-primary px-40 sm:px-5">
          <Intro />
          <About />
          <Experiences />
          <Projects />
          <Education />
          <Contact />
          <Footer />
          <LeftSider />
        </div>
      )}
    </div>
  );
};

export default Home;
