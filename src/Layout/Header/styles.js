import styled from "styled-components";
import { mobile } from "../../responsive";
import MenuIcon from "@mui/icons-material/Menu";

export const Container = styled.div`
  background: ${({ theme }) => theme.themeMode};
  height: ${({ h }) => (h ? h : "100%")};
  box-shadow: ${({ bb }) => (bb ? bb : "")};
  color: ${({ theme }) => theme.modeReverse};
  position: ${({ pos }) => (pos ? pos : "")};
  width: ${({ w }) => (w ? w : "")};
  margin: ${({ m }) => (m ? m : "")};
  top: 0;
  left: 0;
  right: 0;
  font-family: ${({ ff }) => (ff ? ff : "")};
  z-index: ${({ zIndex }) => (zIndex ? zIndex : "")};
  border: ${({ b }) => (b ? b : "")};
`;

export const BoxEffect = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.primary};
  filter: blur(100px);
  z-index: -1;
  width: 100%;
`;
export const Nav = styled.nav`
  display: flex;
  align-items: center;
  height: 100%;
  background: ${({ theme, themeModeThree }) =>
    themeModeThree && theme.themeModeThree};
  border-radius: 50px 0 0 0;
  > ul {
    display: flex;
    column-gap: 1em;
    align-items: center;
    height: 100%;
    > li {
      list-style-type: none;
      height: 100%;
      display: flex;
      align-items: center;
      > a {
        color: inherit;
        height: 100%;
        display: flex;
        align-items: center;
        border-bottom: 4px solid transparent;
        transition: border-bottom 0.4s ease-in-out;
        padding: 0 20px;
      }
      .active {
        border-bottom: ${({ theme }) => `4px solid ${theme.primary}`};
      }
    }
  }
  transition: 0.4s ease-in-out;
  ${mobile({ display: "none" })}
`;

export const MenuBurger = styled(MenuIcon)`
  color: inherit;
`;
