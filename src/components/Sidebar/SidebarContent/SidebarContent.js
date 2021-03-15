import React, { useState, useEffect } from "react";
import axios from "axios";

import { Container, Item, Title } from "./index";

function SidebarContent() {
  const [users, setUser] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/posts/1/comments";

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(url);

        setUser([...response.data]);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);

  return (
    <Container>
      <Item>
        <Title>Tendencias do Brasil</Title>
      </Item>
      {users.map((element, idx) => (
        <Item key={idx}>{element.name}</Item>
      ))}
    </Container>
  );
}

export default SidebarContent;
