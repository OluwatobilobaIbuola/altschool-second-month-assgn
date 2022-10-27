import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../../responsive";
import { Button } from "../../Components/styles/Button.styled";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
  min-width: 50%;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "70vh" })}
`;

const InfoContainer = styled.div`
  min-width: 50%;
  padding: 0px 30px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
  word-break: break-all;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Phone = styled.div`
  font-weight: 100;
  font-size: 40px;
`;

export const SingleUser = ({ users }) => {
  const { userId } = useParams();
  const user = users?.results?.find((user) => user.id.value === userId);

  return (
    <Container>
      <Wrapper>
        <ImgContainer>
          <Image src={user?.picture?.large} />
        </ImgContainer>
        <InfoContainer>
          <Title>{user?.email}</Title>
          <Desc>{user?.location?.city}</Desc>
          <Phone>{user?.phone}</Phone>
          <Button w="198px">Call</Button>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};
