import React from "react";
import { Outlet, useParams } from "react-router-dom";
import { Box } from "../../Components/styles/Box.styled";
import { Users } from "../../Components/Users/Users";

export const UsersList = ({ setUsers }) => {
  const { userId } = useParams();
  return (
    <>
      {!userId && <Users setUsers={setUsers} />}
      <Outlet />
    </>
  );
};
