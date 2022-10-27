import styled from "styled-components";
import { mobile } from "../../responsive";

export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  margin-inline: auto;
  ${mobile({ marginLeft: "auto" })}
`;

export const Nav = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  margin-bottom: 1rem;
  align-items: center;
  justify-content: "center";
  button {
    padding: 0.5em;
    width: 70px;
    height: auto;
    margin: 0;
    margin-right: 8px;
    border: ${({ theme }) => `1.5px solid ${theme.modeReverse}`};
    border-radius: 4px;
    white-spacing: nowrap;
    :focus {
      background-color: ${({ theme }) => theme.themeMode};
      color: ${({ theme }) => theme.modeReverse};
    }
    :hover {
      background-color: ${({ theme }) => theme.themeMode};
      color: ${({ theme }) => theme.modeReverse};
    }
  }
`;
