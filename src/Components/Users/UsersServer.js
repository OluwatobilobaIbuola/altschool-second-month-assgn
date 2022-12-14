import { LinearProgress } from "@mui/material";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "../styles/Box.styled";
import { Container } from "../styles/Container.style";
import { Wrapper } from "../styles/Wrapper.style";
import { User } from "../User/User";
import { Text } from "../styles/Text";
import { Button, Nav, NavButton, NavContainer } from "./style";
import { getUsers } from "../../services/apis";
import { useQuery } from "react-query";
import { useEffect } from "react";
import { Skeleton } from "../WithSuspense";
import { Error } from "../ErrorMessage/Error";
import { mobile } from "../../responsive";
import { EventValues } from "../context/context";
import { useContext } from "react";

const PageButton = ({ pg, setPage, page }) => {
  return (
    <NavButton current={pg === page ? true : false} onClick={() => setPage(pg)}>
      {pg}
    </NavButton>
  );
};

export const Users = ({ setUsers, setIsFetching }) => {
  const [page, setPage] = useState(1);
  const [result, setResult] = useState(10);
  const { screenSize } = useContext(EventValues);
  const {
    isLoading,
    isError,
    isFetching,
    data: users,
    isPreviousData,
  } = useQuery(["users", page, result], () => getUsers(page, result), {
    keepPreviousData: true,
  });

  useEffect(() => {
    setUsers(users);
    setIsFetching(isFetching);
  }, [users, isFetching]);

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
      <NavContainer>
        <Nav>
          <Button onClick={prevPage} disabled={isPreviousData || page === 1}>
            Prev
          </Button>
          {screenSize > 768 &&
            pagesArray.map((pg) => (
              <PageButton key={pg} pg={pg} page={page} setPage={setPage} />
            ))}
          <Text ws="nowrap" padding="0 0.5em">
            Page {users?.info?.page}
          </Text>
          <Button onClick={nextPage} disabled={isPreviousData}>
            Next
          </Button>
        </Nav>
      </NavContainer>
      <Wrapper flow="row wrap" align="stretch" justfy="flex-start">
        {users?.results?.length > 1 &&
          users?.results?.map((user, index) => {
            return <User user={user} index={index} />;
          })}
      </Wrapper>
    </Box>
  );
};
