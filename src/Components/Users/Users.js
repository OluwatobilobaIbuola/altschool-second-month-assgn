import { LinearProgress } from "@mui/material";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "../../Components/styles/Box.styled";
import { Container } from "../../Components/styles/Container.style";
import { Wrapper } from "../../Components/styles/Wrapper.style";
import { User } from "../../Components/User/User";
import { Text } from "../../Components/styles/Text";
import { Nav } from "./style";
import { getUsers } from "../../services/apis";
import { useQuery } from "react-query";
import { useEffect } from "react";
import { Skeleton } from "../WithSuspense";
import { Error } from "../ErrorMessage/Error";

const PageButton = ({ pg, setPage }) => {
  return <button onClick={() => setPage(pg)}>{pg}</button>;
};

export const Users = ({ setUsers }) => {
  const [page, setPage] = useState(1);
  const {
    isLoading,
    isError,
    error,
    isFetching,
    data: users,
    isPreviousData,
  } = useQuery(["users", page], () => getUsers(page), {
    keepPreviousData: true,
  });

  useEffect(() => {
    setUsers(users);
  }, [users]);

  const prevPage = () => setPage((prev) => prev - 1);
  const nextPage = () => setPage((prev) => prev + 1);
  const pagesArray = Array(5)
    .fill()
    .map((_, index) => index + 1);

  if (isLoading) {
    return <Skeleton />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <Box padding="40px 0" ml="auto">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "50%",
          marginLeft: "auto",
        }}
      >
        <Nav>
          <button onClick={prevPage} disabled={isPreviousData || page === 1}>
            Prev
          </button>
          {pagesArray.map((pg) => (
            <PageButton key={pg} pg={pg} setPage={setPage} />
          ))}
          <Text padding="0 0.5em">Page {users?.info?.page}</Text>
          <button onClick={nextPage} disabled={isPreviousData}>
            Next
          </button>
        </Nav>
        <div style={{ height: "5px", width: "100%" }}>
          {isFetching && <LinearProgress color="inherit" />}
        </div>
      </div>
      <Wrapper flow="row wrap" align="stretch" justfy="flex-start">
        {users?.results?.length > 1 &&
          users?.results?.map((user, index) => {
            return <User user={user} index={index} />;
          })}
      </Wrapper>
    </Box>
  );
};