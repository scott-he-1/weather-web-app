import React from "react";
import styled from "styled-components";

const SubWeatherInfoContainer = styled.div`
  width: 100%;
  padding-top: 5px;
  padding-bottom: 5px;
  width: 100%;
  min-width 100px;
  position: relative;
  text-align:center;
`;

const BackgroundImage = styled.img`
  position: absolute;
  z-index: -1;
  left: 0;
`;

const SmallTextContainer = styled.div`
  font-size: 1rem;
`;

const MediumTextContainer = styled.div`
  font-size: 1.5rem;
`;

const LargeTextContainer = styled.div`
  font-size: 3rem;
`;

export const SubWeatherContainer = ({
  topDesc,
  middleDesc,
  bottomDesc,
  backgroundSrc,
}) => {
  return (
    <SubWeatherInfoContainer>
      <BackgroundImage src={backgroundSrc} />
      <MediumTextContainer>{topDesc}</MediumTextContainer>
      <LargeTextContainer>{middleDesc}</LargeTextContainer>
      <SmallTextContainer>{bottomDesc}</SmallTextContainer>
    </SubWeatherInfoContainer>
  );
};
