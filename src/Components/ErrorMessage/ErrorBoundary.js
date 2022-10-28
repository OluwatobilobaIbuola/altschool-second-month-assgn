import { Component } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { welcomeRobo } from "../assets";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error) {
    console.log("error", error.info);
  }

  reRoute = () => {
    window.location.href = "/";
  };

  render() {
    if (this.state.hasError) {
      return (
        <DisplayWrapper>
          <Image src={welcomeRobo} alt="robot" />
          <CircleStyled>
            <Box>
              <p>
                Something went wrong!!!{" "}
                <Link to="" onClick={this.reRoute}>
                  Try again
                </Link>
              </p>
            </Box>
          </CircleStyled>
        </DisplayWrapper>
      );
    }
    return this.props.children;
  }
}

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
const Box = styled.div`
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

const Image = styled.img`
  position: absolute;
  right: 10px;
  top: 10px;
`;
