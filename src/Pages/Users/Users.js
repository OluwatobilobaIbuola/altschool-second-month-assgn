import React from "react";
import { Outlet, useParams } from "react-router-dom";
import { Box } from "../../Components/styles/Box.styled";
import { Users } from "../../Components/Users/Users";

export const UsersList = ({ setUsers }) => {
  const { userId } = useParams();
  return (
    <Box padding="40px 0" ml="auto">
      {!userId && <Users setUsers={setUsers} />}
      <Outlet />
    </Box>
  );
};
