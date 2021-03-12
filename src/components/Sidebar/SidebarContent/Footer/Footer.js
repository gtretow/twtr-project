import React from "react";

import { Container, Link } from "./index";

function Footer() {
  return (
    <Container>
      <Link href="#">
        <span>Termos de Serviço</span>
      </Link>
      <Link href="#">
        <span>Política de privacidade</span>
      </Link>
      <Link href="#">
        <span>Política de cookies</span>
      </Link>
      <Link href="#">
        <span>Informações de anúncios</span>
      </Link>
      <Link href="#">
        <span>Mais</span>
      </Link>
      <Link href="#">
        <span>© 2021 Twitter, Inc.</span>
      </Link>
    </Container>
  );
}

export default Footer;
