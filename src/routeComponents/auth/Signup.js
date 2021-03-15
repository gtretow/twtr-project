/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Container, Form, Button, Input } from "./index";
//informações comentadas, pois elas dependem do backend da aplicação para funcionar
/* import api from "../../api/api";
 */
function Signup(props) {
  const history = useHistory();
  const [state, setState] = useState({ name: "", password: "", email: "" });
  const [errors, setErrors] = useState({
    name: null,
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
    history.push("/auth/login");

    /* try {
      // eslint-disable-next-line no-unused-vars
      const response = await api.post("/signup", state);
      setErrors({ name: "", password: "", email: "" });
      //props.history.push("/auth/login");
      history.push("/home");
    } catch (err) {
       console.error(err.response);
       setErrors({ ...err.response.data.errors });
    } */
  }

  return (
    <Form onSubmit={handleSubmit}>
      <h1>Signup!</h1>

      <Container>
        <label htmlFor="signupFormName">Nome</label>
        <Input
          type="text"
          name="name"
          id="signupFormName"
          value={state.name}
          error={errors.name}
          onChange={handleChange}
        />
      </Container>

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
        <Button type="submit">Registrar!</Button>

        <Link to="/auth/login">Já tem uma conta? Faça login </Link>
      </Container>
    </Form>
  );
}

export default Signup;
