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
  const [like, setLike] = useState(0);
  const [retweet, setRetweet] = useState(0);
  const [color, setColor] = useState(false);
  const [fill, setFill] = useState(false);

  function handleLick() {
    !like
      ? setLike(like + 1) && setColor(!color) && setFill(!fill)
      : setLike(like - 1) && setColor(!color) && setFill(!fill);
  }

  function handleRetweet() {
    !retweet
      ? setRetweet(retweet + 1) && setColor(!color) && setFill(!fill)
      : setRetweet(retweet - 1) && setColor(!color) && setFill(!fill);
  }

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
                <RetweetIcon
                  onClick={handleRetweet}
                 
                />

                {retweet}
              </Status>
              <Status>
                <LikeIcon
                  onClick={handleLick }
                  
                />

                {like}
              </Status>
            </Icons>
          </Content>
        ))}
      </Body>
    </Container>
  );
}

export default Tweet;
