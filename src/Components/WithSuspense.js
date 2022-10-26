import React, { Suspense } from "react";
import styled from "styled-components";
import CircularProgress from "@mui/material/CircularProgress";

export const Skeleton = () => {
  return (
    <Container>
      <Box>
        <CircularProgress color="inherit" />
      </Box>
    </Container>
  );
};

export const WithSuspense = (Component) => (props) =>
  (
    <Suspense fallback={<Skeleton />}>
      <Component {...props} />
    </Suspense>
  );

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.18);
  top: 0;
  bottom: 0;
  left: 0;
  bottom: 0;
  position: fixed;
  width: 100vw;
  z-index: 100000;
`;
const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  color: ${({ theme }) => theme.modeReverse};
`;
