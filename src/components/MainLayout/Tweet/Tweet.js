import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  Container,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
} from "./index";

function Tweet() {
  const [users, setUser] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/posts/1/comments";
  console.log(users);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(url);

        setUser([...response.data]);
        console.log(response.data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);

  return (
    <Container>
      <Body>
        {users.map((element, idx) => (
          <Content key={idx}>
            <Header>
              <Avatar />
              <strong>Provi</strong>
              <span>@provi</span>
              <Dot />
              <time>10 de fev</time>
            </Header>
            <Description>
              {element.body.length > 140
                ? (element.body = element.body.substring(0, 140))
                : element.body}
            </Description>
            <ImageContent />
            <Icons>
              <Status>
                <CommentIcon />
                20
              </Status>
              <Status>
                <RetweetIcon />
                2000
              </Status>
              <Status>
                <LikeIcon />
                20000
              </Status>
            </Icons>
          </Content>
        ))}
      </Body>
    </Container>
  );
}

export default Tweet;
