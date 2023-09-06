import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { WeatherDisplay } from "../../components/WeatherDisplay";
import { useWeather } from "../../context/WeatherProvider";
import { getWeatherByLatLon } from "../../services/getWeather";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 10px;
`;

export const Home = () => {
  const { setHomeWeatherItem } = useWeather();

  const [weather, setWeather] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((data) => {
        const lat = data.coords.latitude;
        const lon = data.coords.longitude;
        setIsLoading(true);
        getWeatherByLatLon(lat, lon)
          .then((data) => {
            setWeather(data);
            setHomeWeatherItem({
              name: data.name,
              countryCode: data.sys.country,
              temp: data.main.temp,
            });
          })
          .catch((err) => {
            console.error(err);
            setIsError(true);
          })
          .finally(() => {
            setIsLoading(false);
          });
      });
    } else {
      console.log("Your browser does not support Geolocation");
    }
  }, []);

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
