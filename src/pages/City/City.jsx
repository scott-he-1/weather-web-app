import React, { useEffect, useState } from "react";
import { getWeatherCity } from "../../services/getWeather";
import styled from "styled-components";
import { useLocation, useParams } from "react-router";
import { WeatherDisplay } from "../../components/WeatherDisplay";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 10px;
`;

export const City = () => {
  const location = useLocation();
  const [weather, setWeather] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { cityId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getWeatherCity(cityId)
      .then((data) => {
        setWeather(data);
      })
      .catch((err) => {
        console.error(err);
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [location]);

  return (
    <ContentContainer>
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Something went wrong</div>
      ) : (
        <WeatherDisplay weather={weather} />
      )}
    </ContentContainer>
  );
};
