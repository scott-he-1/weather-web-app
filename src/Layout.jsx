import React from "react";
import { Navbar } from "./components/Navbar";
import { Outlet } from "react-router";
import styled from "styled-components";
import { useWeather } from "./context/WeatherProvider";

const AppLayout = styled.div`
  display: flex;
`;
const Trigram = styled.div`
  cursor: pointer;
  position: fixed;
  top: 10px;
  left: 10px;
  @media (min-width: 765px) {
    display: none;
  }
`;

export const Layout = () => {
  const { toggleMenu, showMenu } = useWeather();
  return (
    <AppLayout>
      {!showMenu ? <Trigram onClick={toggleMenu}>☰</Trigram> : null}
      <Navbar />
      <Outlet />
    </AppLayout>
  );
};
