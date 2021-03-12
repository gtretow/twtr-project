import styled, { css } from "styled-components";

import {
  Home,
  Notifications,
  Email,
  FavoriteBorder,
  Person,
  Twitter,
  Hash,
  List,
  DotsHorizontalRounded,
} from "../../styles/icons";

export const Container = styled.div`
  display: none;

  @media (min-width: 500px) {
    /*       aparece a partir da width do ipad */
    display: flex;
 
  }
`;

export const SideMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1280px) {
    align-items: flex-start;
  }


`;



export const MenuButton = styled.button``;
export const Button = styled.div``;

export const HashIcon = styled.div``;
export const ListIcon = styled.div``;
export const DotsIcon = styled.div``;
export const Logo = styled.div``;
export const HomeIcon = styled.div``;
export const BellIcon = styled.div``;
export const EmailIcon = styled.div``;
export const FavoriteIcon = styled.div``;
export const ProfileIcon = styled.div``;
