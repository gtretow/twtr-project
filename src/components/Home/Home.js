import React from "react";

import { Container, Wrapper } from "./index";

import Navbar from "../Navbar/Navbar";
import MainLayout from "../MainLayout/MainLayout";

const Home = () => {
  return (
    <Container>
      <Wrapper>
        <Navbar />
        <MainLayout />
      </Wrapper>
    </Container>
  );
};

export default Home;
