import React from "react";
import styled from "styled-components";
import { breakpoint } from "../services/responsiveBreakpoints";
import { weatherPicturePicker } from "../services/weatherPicturePicker";
import { MiscellaneousInfo } from "./MiscellaneousInfo";
import { SubWeatherContainer } from "./SubWeatherContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faDroplet,
  faEye,
  faWind,
} from "@fortawesome/free-solid-svg-icons";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const HeroHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 2rem;
`;

const Hero = styled.div`
  font-size: 1.5rem;
`;

const GeneralTextContainer = styled.div`
  font-size: 12px;
  align-content: center;
  justify-content: center;
  @media ${breakpoint.l} {
    display: none;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  color: white;
  gap: 10px;
  @media ${breakpoint.l} {
    flex-direction: column;
  }
`;

const FlexColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-width: 300px;
`;

const MiscColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-width: 300px;
  @media ${breakpoint.l} {
    flex-direction: row;
  }
  @media (max-width: 420px) {
    flex-direction: column;
  }
`;

const GridWeatherInfo = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 5px;
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

const MainWeatherInfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 50px;
  position: relative;
`;

const BackgroundImage = styled.img`
  position: absolute;
  z-index: -1;
`;

export const WeatherDisplay = ({ weather }) => {
  if (!weather) {
    return <div>Something went wrong</div>;
  }
  const {
    main,
    sys: { country },
    name,
    visibility,
    wind: { speed },
    main: { humidity },
    clouds: { all },
  } = weather;
  const mainWeather = weather.weather[0].main;
  const description = weather.weather[0].description;

  const subWeatherInfo = [
    {
      topDesc: "Feels Like",
      middleDesc: `${Math.round(main.feels_like)}°C`,
      bottomDesc: description,
    },
    {
      topDesc: "Max Temp",
      middleDesc: `${Math.round(main.temp_max)}°C`,
      bottomDesc: description,
    },
    {
      topDesc: "Min Temp",
      middleDesc: `${Math.round(main.temp_min)}°C`,
      bottomDesc: description,
    },
    { topDesc: "Country", middleDesc: country, bottomDesc: description },
  ];

  const genericDesc =
    "The air Quality is generally acceptable for most individuals. However, sensitive groups may experience minor to moderate symptoms from long-term exposure";

  const miscellaneousInfo = [
    {
      name: "Visibility",
      description: genericDesc,
      image: <FontAwesomeIcon icon={faEye} />,
      info: `${visibility} FT`,
    },
    {
      name: "Wind",
      description: genericDesc,
      image: <FontAwesomeIcon icon={faWind} />,
      info: `${speed} KM/H`,
    },
    {
      name: "Clouds",
      description: genericDesc,
      image: <FontAwesomeIcon icon={faCloud} />,
      info: `${all}%`,
    },
    {
      name: "Humidity",
      description: genericDesc,
      image: <FontAwesomeIcon icon={faDroplet} />,
      info: `${humidity}%`,
    },
  ];

  const weatherPicture = weatherPicturePicker(description);

  return (
    <ContentContainer>
      <HeroHeader>
        <Hero>Here you can find a world wide weather forecast</Hero>
        <GeneralTextContainer>
          your solution for worldwide weather forecasts! With our app, you can
          easily get accurate weather updates for any location around the globe.
          Our user-friendly interface and intuitive design make it easy to
          navigate and find the information you need.
        </GeneralTextContainer>
      </HeroHeader>
      <FlexContainer>
        <FlexColumnContainer>
          <MainWeatherInfoContainer>
            <BackgroundImage src={weatherPicture} />
            <SmallTextContainer>{mainWeather}</SmallTextContainer>
            <LargeTextContainer>{Math.round(main.temp)}°C</LargeTextContainer>
            <MediumTextContainer>{name}</MediumTextContainer>
          </MainWeatherInfoContainer>
          <GridWeatherInfo>
            {subWeatherInfo.map((box, i) => (
              <SubWeatherContainer
                topDesc={box.topDesc}
                middleDesc={box.middleDesc}
                bottomDesc={box.bottomDesc}
                backgroundSrc={weatherPicture}
                key={i}
              />
            ))}
          </GridWeatherInfo>
        </FlexColumnContainer>
        <MiscColumnContainer>
          {miscellaneousInfo.map((item, i) => (
            <MiscellaneousInfo
              name={item.name}
              info={item.info}
              description={item.description}
              image={item.image}
              key={i}
            />
          ))}
        </MiscColumnContainer>
      </FlexContainer>
    </ContentContainer>
  );
};
