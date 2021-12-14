import React, { useState } from "react";
import StatusBar from "../components/StatusBar/statusBar";
import Footer from "../components/Footer/Footer";
import Network from "./Network";
import { Containerr } from "./styles";
const Home = () => {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggle = () => {
  //   setIsOpen(!isOpen);
  // };
  return (
    <>
      <StatusBar />
      <Containerr>
        <Network />
        <Footer />
      </Containerr>
    </>
  );
};

export default Home;
