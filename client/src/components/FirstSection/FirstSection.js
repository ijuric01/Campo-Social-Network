import React, { useState } from "react";
import {
  HomeBg,
  HomeBtnWrapper,
  VideoBg,
  ArrowWrapper,
  HomeContainer,
  HomeContent,
  HomeH1,
  HomeP,
  ArrowForward,
  ArrowRight,
} from "./FirstElements";
import Video from "../../videos/video.mp4";
import { Button } from "../ButtonElements";
import { Arrow } from "../../images/arrow.png";

const FirstSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HomeContainer id="home">
      <HomeBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4"></VideoBg>
      </HomeBg>
      <HomeContent>
        <HomeH1>A social network for nature lovers</HomeH1>
        <HomeP>
          Find the perfect weekend getaway or your home away from home for the
          summer!
        </HomeP>

        <HomeBtnWrapper>
          <Button
            to="/posts"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            smooth="true"
            duration={500}
            spy="true"
            exact="true"
            offset={-80}
          >
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HomeBtnWrapper>
      </HomeContent>
      <ArrowWrapper src={Arrow}></ArrowWrapper>
    </HomeContainer>
  );
};

export default FirstSection;
