import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.themeMode};
  min-height: ${({ minh }) => (minh ? minh : "100%")};
  box-shadow: ${({ bb }) => (bb ? bb : "")};
  color: ${({ theme }) => theme.modeReverse};
  position: ${({ pos }) => (pos ? pos : "")};
  width: ${({ w }) => (w ? w : "100%")};
  margin: ${({ m }) => (m ? m : "")};
  top: ${({ top }) => (top ? top : "")};
  font-family: ${({ ff }) => (ff ? ff : "")};
  z-index: ${({ zIndex }) => (zIndex ? zIndex : "")};
`;
