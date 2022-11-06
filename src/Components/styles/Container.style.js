import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme, bg }) => bg || theme.themeMode};
  min-height: ${({ minh }) => (minh ? minh : "100%")};
  box-shadow: ${({ bb }) => (bb ? bb : "")};
  color: ${({ theme }) => theme.modeReverse};
  position: ${({ pos }) => (pos ? pos : "")};
  width: ${({ w }) => (w ? w : "100%")};
  max-width: ${({ maxW }) => (maxW ? maxW : "")};
  min-width: ${({ minW }) => (minW ? minW : "")};
  margin: ${({ m }) => (m ? m : "")};
  top: ${({ top }) => (top ? top : "")};
  font-family: ${({ ff }) => (ff ? ff : "")};
  z-index: ${({ zIndex }) => (zIndex ? zIndex : "")};
  transition: background 0.4s ease-in-out;
  border: ${({ b }) => (b ? b : "")};
  inset: ${({ inset }) => (inset ? inset : "")};
`;
