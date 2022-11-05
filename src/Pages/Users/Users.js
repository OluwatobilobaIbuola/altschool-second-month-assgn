import React from "react";
import { Outlet, useParams } from "react-router-dom";
import { Users } from "../../Components/Users/UsersClient";

export const UsersList = ({ users, setUsers, setIsFetching }) => {
  const { userId } = useParams();
  return (
    <>
      {!userId && (
        <Users
          users={users}
          setUsers={setUsers}
          setIsFetching={setIsFetching}
        />
      )}
      <Outlet />
    </>
  );
};
