import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

export const Error = () => {
  const reRoute = () => {
    window.location.href = "/";
  };

  return (
    <DisplayWrapper>
      <CircleStyled>
        <Box>
          <p>
            Something went wrong!!!{" "}
            <Link to="" onClick={reRoute}>
              Try again
            </Link>
          </p>
        </Box>
      </CircleStyled>
    </DisplayWrapper>
  );
};

export const DisplayWrapper = styled.div`
  width: 100vw;
  background: rgba(1, 1, 1, 0.5);
  top: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  overflow-y: scroll;
  overflow-x: hidden;
  z-index: 100000;
`;
export const Box = styled.div`
  padding: 2em;
  background-color: ${({ theme }) => theme.themeMode};
  color: ${({ theme }) => theme.modeReverse};
  border-radius: 4px;
`;
const CircleStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;
