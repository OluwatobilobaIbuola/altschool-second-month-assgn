import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled, { css } from "styled-components";

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
  background: rgba(1, 1, 1, 0.3);
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
  background-color: ${({ theme }) => theme.themeModeThree};
  color: ${({ theme }) => theme.modeReverseTwo};
  border-radius: 4px;
  border: ${({ theme }) => {
    return css`1px solid ${theme.modeReverseTwo}`;
  }};
  > p {
    a {
      text-decoration: underline;
    }
  }
`;
const CircleStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;
