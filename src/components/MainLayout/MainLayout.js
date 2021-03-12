import React from "react";

import Timeline from "./Timeline/Timeline";

import {
  Container,
  Header,
  BackIcon,
  Bio,
  RSideBar,
  HomeIcon,
  SearchIcon,
  BellIcon,
  EmailIcon,
} from "./index";

function MainLayout() {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>

        <Bio>
          <strong>Provi</strong>
          <span>1000 Tweets</span>
        </Bio>
      </Header>
      <Timeline />

      <RSideBar>
        <HomeIcon />
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </RSideBar>
    </Container>
  );
}

export default MainLayout;
