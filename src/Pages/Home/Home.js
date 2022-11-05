import React from "react";
import { Box } from "../../Components/styles/Box.styled";
import { Container } from "../../Components/styles/Container.style";
import { Users } from "../../Components/Users/UsersClient";

export const Home = ({ users, setUsers, setIsFetching }) => {
  return (
    <Container minh="100vh">
      <Users users={users} setUsers={setUsers} setIsFetching={setIsFetching} />
    </Container>
  );
};
