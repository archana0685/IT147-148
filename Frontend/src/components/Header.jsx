import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";

const Header = () => {
    return (
        <MainHeader>
            <NavLink  data-aos="zoom-in-down" to="/">
                <img className="logo" src="images/logo2.png" alt="my logo img"/>
            </NavLink>
            <Nav />
        </MainHeader>
    )

}

const MainHeader = styled.header`
  padding: 0 4.8rem;
  padding-left : 4rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 9rem;

  }
`;

export default Header;