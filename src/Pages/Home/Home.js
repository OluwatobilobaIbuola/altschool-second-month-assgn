import React, { useEffect, useState } from "react";
import { Box } from "../../Components/styles/Box.styled";
import { Container } from "../../Components/styles/Container.style";
import { Users } from "../../Components/Users/Users";

export const Home = ({ setUsers }) => {
  return (
    <Container minh="100vh">
      <Box padding="40px 0" ml="auto">
        <Users setUsers={setUsers} />
      </Box>
    </Container>
  );
};
