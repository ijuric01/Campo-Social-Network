import React, { useState } from "react";
import FirstSection from "../components/FirstSection/FirstSection";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from "../components/InfoSection/Data";
import InfoSection from "../components/InfoSection/InfoSection";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import Footer from "../components/Footer/Footer";
import Cards from "../components/Cards/Cards";
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <FirstSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Cards />
      <InfoSection {...homeObjThree} />

      <Footer />
    </>
  );
};

export default Home;
