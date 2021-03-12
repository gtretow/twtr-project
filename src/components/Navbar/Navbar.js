import React from "react";

import {
  Container,
  SideMenu,
  Logo,
  MenuButton,
  HomeIcon,
  BellIcon,
  EmailIcon,
  FavoriteIcon,
  ProfileIcon,
  Button,
  HashIcon,
  ListIcon,
  DotsIcon,
} from "./index";

function Navbar() {
  return (
    <Container>
      <SideMenu>
        <Logo />
        <MenuButton>
          <HomeIcon />
          <span>Página inicial</span>
        </MenuButton>
        <MenuButton>
          <HashIcon />
          <span>Explorar</span>
        </MenuButton>
        <MenuButton>
          <BellIcon />
          <span>Notificaçõe</span>
        </MenuButton>
        <MenuButton>
          <EmailIcon />
          <span>Mensagens</span>
        </MenuButton>
        <MenuButton>
          <FavoriteIcon />
          <span>Salvo</span>
        </MenuButton>
        <MenuButton>
          <ListIcon />
          <span>Listas</span>
        </MenuButton>
        <MenuButton>
          <ProfileIcon className="active" />
          <span>Perfil</span>
        </MenuButton>
        <MenuButton>
          <DotsIcon />
          <span>Mais</span>
        </MenuButton>

        <Button>
          <span>Tweetar</span>
        </Button>
      </SideMenu>
    </Container>
  );
}

export default Navbar;
