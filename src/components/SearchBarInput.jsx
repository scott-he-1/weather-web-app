import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import React, { useState } from "react";
import { useWeather } from "../context/WeatherProvider";

const SearchBarContainer = styled.div`
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const SearchInput = styled.input`
  border-radius: 5px;
  border: none;
  background-color: #f5f5f5;
  font-size: 1rem;
  padding: 10px 10px 10px 2.5rem;
  width: 80%;
  margin: 5%;
  height: 30px;
`;

const SearchInputForm = styled.form``;

const MagnifyingGlass = styled(FontAwesomeIcon)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 12.5%;
  color: gray;
`;

export const SearchBarInput = () => {
  const [searchInput, setSearchInput] = useState("");
  const { addCityToList, citiesList } = useWeather();

  const updateSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  const addCityToHistory = (e) => {
    e.preventDefault();
    if (searchInput.length <= 0) {
      return;
    }
    if (!citiesList.find((city) => city.name === searchInput)) {
      addCityToList(searchInput);
      setSearchInput("");
    }
  };

  return (
    <SearchBarContainer>
      <SearchInputForm onSubmit={addCityToHistory}>
        <SearchInput
          placeholder={"Enter city..."}
          onChange={(e) => updateSearchInput(e)}
          value={searchInput}
        />
      </SearchInputForm>
      <MagnifyingGlass icon={faMagnifyingGlass} color="black" />
    </SearchBarContainer>
  );
};
