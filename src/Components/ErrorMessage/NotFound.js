import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { welcomeRobo } from "../assets";

const NotFound = () => {
  const location = useLocation();
  return (
    <DisplayWrapper>
      <Image src={welcomeRobo} alt="robot" />
      <CircleStyled>
        <h1>
          404...
          <br /> Page Not Found.
        </h1>
        <p>
          This is not the page you are looking for. Check the spelling and try
          again.
        </p>
      </CircleStyled>
    </DisplayWrapper>
  );
};

export default NotFound;

const DisplayWrapper = styled.div`
  width: 100vw;
  background-color: ${({ theme }) => theme.themeMode};
  top: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  overflow-y: scroll;
  overflow-x: hidden;
  z-index: 100000;
`;
const CircleStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  font-size: 48px;
  flex-direction: column;
  p {
    font-size: 24px;
  }
`;

const Image = styled.img`
  position: absolute;
  right: 10px;
  top: 10px;
`;
