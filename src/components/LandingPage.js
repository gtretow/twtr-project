import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./index";

function LandingPage() {
  return (
    <Container>
      <h1>Provi Challenge!</h1>
      <p> Faça login para entrar no projeto</p>
      <Container>
        <Link to="/auth/login">Conectar-se</Link>

        <Link c to="/auth/signup">
          Criar Conta
        </Link>
      </Container>
    </Container>
  );
}

export default LandingPage;
