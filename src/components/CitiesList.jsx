import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { CityListItem } from "./CityListItem";
import { useWeather } from "../context/WeatherProvider";

const CityListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const CitiesList = () => {
  const { citiesList } = useWeather();

  return (
    <CityListContainer>
      {citiesList.map((city) => (
        <CityListItem
          city={city.name}
          temp={city?.temp}
          countryCode={city.countryCode}
          key={city.name}
        />
      ))}
    </CityListContainer>
  );
};
