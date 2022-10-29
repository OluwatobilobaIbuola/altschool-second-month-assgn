import React, { lazy, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "./Header/Header";
import { Home } from "../Pages/Home/Home";
import { Container } from "../Components/styles/Container.style";
import { UsersList } from "../Pages/Users/Users";
import { SingleUser } from "../Pages/SingleUser/SingleUser";
import { WithSuspense } from "../Components/WithSuspense";
import { About } from "../Pages/About/About";
import { FadeInLeft } from "../Components/styles/animations";
const NotFound = WithSuspense(
  lazy(() => import("../Components/ErrorMessage/NotFound"))
);

export const Pages = () => {
  const [users, setUsers] = useState(undefined);
  return (
    <Container pos="relative" minh="100vh">
      <Header />
      <Container maxW="1980px" m="70px auto 0">
        <Routes>
          <Route
            path="/"
            element={
              <FadeInLeft>
                <Home setUsers={setUsers} />
              </FadeInLeft>
            }
          />
          <Route
            path="home"
            element={
              <FadeInLeft>
                <Home setUsers={setUsers} />
              </FadeInLeft>
            }
          />
          <Route
            path="about"
            element={
              <FadeInLeft>
                <About />
              </FadeInLeft>
            }
          />
          <Route path="users" element={<UsersList setUsers={setUsers} />}>
            <Route
              path=":userId"
              element={
                <FadeInLeft>
                  <SingleUser users={users} />
                </FadeInLeft>
              }
            />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </Container>
  );
};
