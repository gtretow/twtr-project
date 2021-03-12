import React from "react";
import Feed from "../Feed/Feed";

import {
  Container,
  Banner,
  Avatar,
  BioInfo,
  Follows,
  LocationIcon,
  CakeIcon,
  PersonIcon,
  EditButton,
} from "./index";

function Timeline() {
  return (
    <div>
      <Container>
        <Banner>
          <Avatar />
        </Banner>

        <BioInfo>
          <EditButton>Editar Perfil</EditButton>
          <h1>Provi</h1>
          <h2>@provi</h2>
          <p>Provi Challenge</p>
          <ul>
            <li>
              <LocationIcon />
              São Paulo, Brasil
            </li>
            <li>
              <CakeIcon />
              Nascido em 2018
            </li>
          </ul>
          <Follows>
            <span>
              <PersonIcon />
              <strong>116</strong> Seguindo
            </span>
            <span>
              <strong>7.086 </strong>
              seguidores
            </span>
          </Follows>
        </BioInfo>
        <Feed />
      </Container>
    </div>
  );
}

export default Timeline;
