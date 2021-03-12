import React from "react";

import { Container, SearchWrapper, SearchBar, SearchIcon, Body } from "./index";
import Footer from "../Sidebar/SidebarContent/Footer/Footer";

import SidebarContent from "./SidebarContent/SidebarContent";
import WhoToFollow from "./SidebarContent/WhoToFollow/WhoToFollow";

function Sidebar() {
  return (
    <Container>
      <SearchWrapper>
        <SearchBar placeholder="Buscar no twitter"></SearchBar>
        <SearchIcon />
      </SearchWrapper>

      <Body>
        <SidebarContent />
        <WhoToFollow />
        <Footer />
      </Body>
    </Container>
  );
}

export default Sidebar;
