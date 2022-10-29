import React from "react";
import { Outlet, useParams } from "react-router-dom";
import { Users } from "../../Components/Users/Users";

export const UsersList = ({ setUsers, setIsFetching }) => {
  const { userId } = useParams();
  return (
    <>
      {!userId && <Users setUsers={setUsers} setIsFetching={setIsFetching} />}
      <Outlet />
    </>
  );
};
