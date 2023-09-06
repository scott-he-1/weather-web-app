import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import styled from "styled-components";
import { useWeather } from "../context/WeatherProvider";
import { Link, useNavigate } from "react-router-dom";

const CityListItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: all 0.5s;
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

const FlagImage = styled.img``;

const CityListItemInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  margin-right: 30px;
`;

const CityName = styled.div`
  text-align: left;
  width: 150px;
  overflow: hidden;
`;

const RightArrow = styled.div`
  color: black;
  font-size: 1.5rem;
`;

const CityTemp = styled.div``;

export const CityListItem = ({ city, temp, countryCode }) => {
  const { removeCityFromList } = useWeather();
  const navigate = useNavigate();
  const flagImageUrl = `https://flagsapi.com/${countryCode}/flat/64.png`;

  return (
    <CityListItemContainer>
      <FontAwesomeIcon
        icon={faTrashCan}
        className="trash"
        onClick={() => {
          removeCityFromList(city);
        }}
      />
      <FlagWrapper>
        <FlagImage
          src={flagImageUrl}
          onClick={() => {
            navigate(`city/${city}`);
          }}
        />
      </FlagWrapper>

      <CityListItemInfo
        onClick={() => {
          navigate(`city/${city}`);
        }}
      >
        <CityName>{city.toUpperCase()}</CityName>
        {temp ? <CityTemp>{temp}</CityTemp> : null}
      </CityListItemInfo>
      <RightArrow>→</RightArrow>
    </CityListItemContainer>
  );
};
