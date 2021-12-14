import React from "react";
import Icon1 from "../../images/4.svg";
import Icon2 from "../../images/8.svg";
import Icon3 from "../../images/7.svg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./CardsElements";

const Services = () => {
  return (
    <ServicesContainer id="Servicies">
      <ServicesH1>Share your experience!</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Save your time</ServicesH2>
          <ServicesP>
            Get inspiration from others and find camping spot easy.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Enjoy nature</ServicesH2>
          <ServicesP>
            You can acess our plataform online anywhere in the world.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Take a photo</ServicesH2>
          <ServicesP>Share your moment so others can see it too.</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
