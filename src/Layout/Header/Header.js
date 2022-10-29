import React, { useContext, useEffect } from "react";
import ThemeMode from "../../Components/ThemeMode/theme.mode";

import { EventValues } from "../../Components/context/context";
import { Wrapper } from "../../Components/styles/Wrapper.style";
import { BoxEffect, Nav, Container, MenuBurger } from "./styles";
import { Box } from "../../Components/styles/Box.styled";
import { Link, NavLink } from "react-router-dom";

export const Header = () => {
  const { mode, screenSize, setScreenSize } = useContext(EventValues);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container
      bb={
        mode === false || mode === "false"
          ? `0.2px 0.4px 16px 0.2px rgba(13, 17, 23, 0.4)`
          : `2px 2px 16px 2px rgba(201,209,217, 0.4)`
      }
      h="70px"
      pos="fixed"
      w="100%"
      top="0"
      zIndex="10"
    >
      <BoxEffect></BoxEffect>
      <Box h="100%" ml="auto">
        <Wrapper>
          <Link to="/">
            <h1>Logo</h1>
          </Link>
          <ThemeMode />
          <Nav themeModeThree>
            <ul>
              <li>
                <NavLink to="/home">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/users">Users</NavLink>
              </li>
            </ul>
          </Nav>
          {screenSize < 768 && <MenuBurger />}
        </Wrapper>
      </Box>
    </Container>
  );
};
