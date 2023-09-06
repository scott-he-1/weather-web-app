import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { useWeather } from "../context/WeatherProvider";

const HomeLocationContainer = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 300px;
  gap: 5px;
  color: black;
  cursor: pointer;
`;

const LocationInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  font-size: 1rem;
`;

const FlagWrapper = styled.div`
  background-color: #f5f5f5;
  height: 30px;
  width: 30px;
  padding: 15px;
  display: flex;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

const Header = styled.div``;

const FullLocation = styled.div``;

const FlagImage = styled.img``;

export const HomeLocationItem = ({ countryCode, name }) => {
  let flagImageUrl;
  if (countryCode) {
    flagImageUrl = `https://www.countryflagicons.com/SHINY/64/${countryCode}.png`;
  }

  return (
    <HomeLocationContainer to={"/"}>
      <FlagWrapper>
        <FlagImage src={flagImageUrl} alt=""/>
      </FlagWrapper>
      <LocationInfoWrapper>
        <Header>Current Location</Header>
        <FullLocation>{name}</FullLocation>
      </LocationInfoWrapper>
    </HomeLocationContainer>
  );
};
