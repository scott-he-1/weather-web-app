import { weatherImages } from "../assets/weatherImages";
export const weatherPicturePicker = (description) => {
  switch (description) {
    case "clear sky":
      return weatherImages.clearBox;
    case "few clouds":
      return weatherImages.cloudBox;
    case "scattered clouds":
      return weatherImages.mainClouds;
    case "broken clouds":
      return weatherImages.mainClouds;
    case "shower rain":
      return weatherImages.rainBox;
    case "rain":
      return weatherImages.mainRain;
    case "thunderstorm":
      return weatherImages.mainRain;
    case "snow":
      return weatherImages.hazeBox;
    case "mist":
      return weatherImages.mainFog;
    default:
      return weatherImages.clearBox;
  }
};
