import React from "react";
import logo from "../assets/weatherman-logo.png";
import styled from "styled-components";
import { SearchBarInput } from "./SearchBarInput";
import { HomeLocationItem } from "./HomeLocationItem";
import { CitiesList } from "./CitiesList";
import { useWeather } from "../context/WeatherProvider";

const ResponsiveSideNavbar = styled.div`
  background: white;
  height: 100vh;
  @media (min-width: 765px) {
    display: none;
  }
  z-index: 1000;
  padding-left: 15px;
  position: fixed;
  overflow: hidden;
`;

const NormalSideNavbar = styled.div`
  @media (max-width: 765px) {
    display: none;
  }
  padding-left: 15px;
  padding-right: 15px;
`;

const SideNavbar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 300px;
  padding-right: 10px;
  height: 100vh;
  border-right: 1px solid rgba(128, 128, 128, 0.5);
`;

const LogoWrapper = styled.div`
  display: flex;
  padding: 25px;
`;

const Logo = styled.img`
  height: 100px;
  width: 100px;
`;

const MenuToggler = styled.div`
  top: 10px;
  left: 10px;
  position: absolute;
  display: none;
  @media (max-width: 765px) {
    display: block;
  }
  z-index: 1001;
  user-select: none;
`;

const XMark = styled.div`
  cursor: pointer;
  position: fixed;
  top: 10px;
  left: 10px;
`;

export const Navbar = () => {
  const { showMenu, toggleMenu } = useWeather();
  return ( 
    <>
      {showMenu ? (
        <ResponsiveSideNavbar>
          <MenuToggler>
            <XMark onClick={toggleMenu}>X</XMark>
          </MenuToggler>
          <SideNavbar>
            <LogoWrapper>
              <Logo src={logo} />
            </LogoWrapper>
            <HomeLocationItem />
            <SearchBarInput />
            <CitiesList />
          </SideNavbar>
        </ResponsiveSideNavbar>
      ) : null}
      <NormalSideNavbar>
        <SideNavbar>
          <LogoWrapper>
            <Logo src={logo} />
          </LogoWrapper>
          <HomeLocationItem />
          <SearchBarInput />
          <CitiesList />
        </SideNavbar>
      </NormalSideNavbar>
    </>
  );
};
