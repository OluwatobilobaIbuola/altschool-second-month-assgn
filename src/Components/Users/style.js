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
`;

export const Button = styled.button`
  padding: 0.5em;
  width: 70px;
  height: auto;
  margin: 0;
  margin-right: 8px;
  border: ${({ theme }) => `1.5px solid ${theme.modeReverse}`};
  border-radius: 4px;
  white-spacing: nowrap;
`;
export const NavButton = styled(Button)`
  &:focus {
    background-color: ${({ theme, current }) =>
      current ? theme.themeMode : null};
    color: ${({ theme, current }) => (current ? theme.modeReverse : null)};
  }
  &:hover {
    background-color: ${({ theme }) => theme.themeMode};
    color: ${({ theme }) => theme.modeReverse};
  }
  background-color: ${({ theme, current }) =>
    current ? theme.themeMode : null};
  color: ${({ theme, current }) => (current ? theme.modeReverse : null)};
`;
