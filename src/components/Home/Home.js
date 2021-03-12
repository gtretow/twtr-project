import React from "react";

import { Container, Wrapper } from "./index";

import Navbar from "../Navbar/Navbar";
import MainLayout from "../MainLayout/MainLayout";
import Sidebar from "../Sidebar/Sidebar";

const Home = () => {
  return (
    <Container>
      <Wrapper>
        <Navbar />
        <MainLayout />
        <Sidebar />
      </Wrapper>
    </Container>
  );
};

export default Home;
