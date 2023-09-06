import axios from "axios";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "8d36c47ebdmsh5be2556145e48b0p1ed9abjsn8680fc0cd9f2",
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

export const getSelectCities = async (city) => {
  const url = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=100000&namePrefix=${city.trim()}`;
  try {
    const response = await axios(url, options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const apiKey = "9e2df23bf04bf06a287cc4792bce2be1";
export const getWeatherByLatLon = async (lat, lon) => {
  try {
    const response = await axios(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getWeatherCity = async (city) => {
  try {
    const response = await axios(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
