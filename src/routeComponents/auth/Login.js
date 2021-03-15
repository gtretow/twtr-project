import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import api from "../../api/api";
import { Container, Form, Button, Input } from "./index";

import { AuthContext } from "../../contexts/authContext";

function Login(props) {
  const authContext = useContext(AuthContext);
  const history = useHistory();

  const [state, setState] = useState({ password: "", email: "" });
  const [errors, setErrors] = useState({
    email: null,
    password: null,
  });

  function handleChange(event) {
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    history.push("/home");

    /* try {
      const response = await api.post("/login", state);

      authContext.setLoggedInUser({ ...response.data });
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ ...response.data })
      );
      setErrors({ password: "", email: "" });
      history.push("/home");
    } catch (err) {
      console.error(err.response);
      setErrors({ ...err.response.data.errors });
    } */
  }

  return (
    <Form onSubmit={handleSubmit}>
      <h1>Login</h1>

      <Container>
        <label htmlFor="signupFormEmail">E-mail </label>
        <Input
          type="email"
          name="email"
          id="signupFormEmail"
          value={state.email}
          error={errors.email}
          onChange={handleChange}
        />
      </Container>

      <Container>
        <label htmlFor="signupFormPassword">Senha</label>
        <Input
          type="password"
          name="password"
          id="signupFormPassword"
          value={state.password}
          error={errors.password}
          onChange={handleChange}
        />
      </Container>

      <Container>
        <Button type="submit">Login!</Button>

        <Link to="/auth/signup">Não tem uma conta? Faça o registro!</Link>
      </Container>
    </Form>
  );
}

export default Login;
