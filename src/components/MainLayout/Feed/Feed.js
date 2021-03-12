import React from "react";

import Tweet from "../Tweet/Tweet";
import { Container, Tab, Tweets } from "./index";

function Feed() {
  return (
    <Container>
      <Tab>Tweets</Tab>
      <Tweets>
        <Tweet />
      </Tweets>
    </Container>
  );
}

export default Feed;
