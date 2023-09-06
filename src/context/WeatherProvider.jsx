import { createContext, useContext, useEffect, useState } from "react";

const WeatherContext = createContext({});

export const WeatherProvider = ({ children }) => {
  const [homeWeatherItem, setHomeWeatherItem] = useState(null);
  const [citiesList, setCitiesList] = useState([]);
  const [showMenu, setShowMenu] = useState(false);
  const [selectedWeather, setSelectedWeather] = useState(null);

  const getCitiesHistory = () => {
    const unparsedCities = localStorage.getItem("cities");
    let cities = JSON.parse(unparsedCities);
    if (!cities || !Array.isArray(cities)) {
      cities = [];
      localStorage.setItem("cities", "[]");
    }
    const modifiedCities = [];
    for (const city of cities) {
      const modifiedCity = { name: city, countryCode: null, temp: null };
      modifiedCities.push(modifiedCity);
    }
    setCitiesList(modifiedCities);
  };

  const updateCityItem = ({ cityId, countryCode, temp }) => {
    setCitiesList((prevState) =>
      prevState.map((city) => {
        city.name === cityId ? { name: city.name, countryCode, temp } : city;
      })
    );
  };

  const addCityToLocalStorage = (cityName) => {
    const unparsedCities = localStorage.getItem("cities");
    const cities = JSON.parse(unparsedCities);
    if (!cities.includes(cityName)) {
      cities.push(cityName);
      localStorage.setItem("cities", JSON.stringify(cities));
    }
  };

  const removeCityFromLocalStorage = (cityName) => {
    const unparsedCities = localStorage.getItem("cities");
    const cities = JSON.parse(unparsedCities);
    const updatedCities = cities.filter((city) => city !== cityName);
    localStorage.setItem("cities", JSON.stringify(updatedCities));
  };

  const removeCityFromList = (cityName) => {
    setCitiesList((prevState) =>
      prevState.filter((city) => city.name !== cityName)
    );
    removeCityFromLocalStorage(cityName);
  };

  const addCityToList = (cityName) => {
    setCitiesList((prevState) => [
      ...prevState,
      { name: cityName, countryCode: null, temp: null },
    ]);
    addCityToLocalStorage(cityName);
  };

  const toggleMenu = () => {
    setShowMenu((prevState) => !prevState);
  };

  useEffect(() => {
    getCitiesHistory();
  }, []);

  return (
    <WeatherContext.Provider
      value={{
        homeWeatherItem,
        setHomeWeatherItem,
        citiesList,
        showMenu,
        selectedWeather,
        setSelectedWeather,
        removeCityFromList,
        toggleMenu,
        addCityToList,
        updateCityItem,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => {
  const context = useContext(WeatherContext);
  return {
    homeWeatherItem: context.homeWeatherItem,
    setHomeWeatherItem: context.setHomeWeatherItem,
    citiesList: context.citiesList,
    showMenu: context.showMenu,
    toggleMenu: context.toggleMenu,
    addCityToList: context.addCityToList,
    removeCityFromList: context.removeCityFromList,
    updateCityItem: context.updateCityItem,
  };
};
