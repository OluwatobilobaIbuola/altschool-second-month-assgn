import styled, { css, keyframes } from "styled-components";
import { bounce, fadeInLeft, fadeIn } from "react-animations";

export const Bounce = styled.div`
  animation: 3s ${keyframes`${bounce}`} 1;
`;
export const BounceInfinity = styled.div`
  animation: 3s ${keyframes`${bounce}`} infinite;
`;

export const FadeInLeftIndividual = styled.div`
  animation: ${({ index }) => {
    return css`
      ${index * 0.25}s ${keyframes`${fadeInLeft}`} 1
    `;
  }};
`;

export const FadeInLeft = styled.div`
  animation: 0.5s ${keyframes`${fadeInLeft}`} 1;
`;

export const FadeIn = styled.div`
  animation: 4s ${keyframes`${fadeIn}`} 1;
`;
