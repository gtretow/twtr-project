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
    flex-direction: column;
    justify-content: space-between;
    /*  position: sticky;
    top: 0;
    left: 0; */
    padding: 9px 19px 20px;
    max-height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
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

export const MenuButton = styled.button`
  /* Celular não tem navbar, iPad tem apenas os icones */
  /* CSS da menor tela para a maior */
  display: inline;
  align-items: center;
  padding-right: 1rem;
  padding: 8.25px;
  outline: 0;

  /* The flex-shrink CSS property sets the flex shrink factor of a flex item. If the size of all flex items is larger than the flex container, items shrink to fit according to flex-shrink. */

  flex-shrink: 0;

  > span {
    display: none;
  }

  @media (min-width: 1280px) {
    > span {
      display: inline;
      margin-left: 1.1rem;
      font-weight: bold;
      font-size: 1.3rem;
    }
  }

  /* a partir do primeiro botão */
  & + button {
    margin-top: 16px;
  }

  & + button:last-child {
    margin-top: 33px;
    width: 40px;
    height: 40px;
    > span {
      display: none;
    }

    @media (min-width: 1280px) {
      width: 10rem;
      height: unset;
      > span {
        display: inline;
        font-weight: bold;
      }
    }
  }

  cursor: pointer;
  border-radius: 25px;
  &:hover {
    background: var(--twitter-dark-hover);
  }

  &:hover,
  &.active {
    span,
    svg {
      color: var(--twitter);
      fill: var(--twitter);
    }
  }
`;

export const Button = styled.button`
  background: var(--twitter);
  padding: 0.8rem;
  border-radius: 25px;
  font-size: 1rem;
  cursor: pointer;
  outline: 0;

  > strong {
    color: white;
  }

  &:hover {
    background: #2885c9;
  }
`;

/* css para todos os componentes icon*/
const iconCSS = css`
  flex-shrink: 0;
  width: 30px;
  height: 30px;
  color: var(--white);
`;

export const HashIcon = styled(Hash)`
  ${iconCSS}
`;
export const ListIcon = styled(List)`
  ${iconCSS}
`;
export const DotsIcon = styled(DotsHorizontalRounded)`
  ${iconCSS}
`;
export const Logo = styled(Twitter)`
  width: 41px;
  height: 41px;

  margin-bottom: 20px;
`;
export const HomeIcon = styled(Home)`
  ${iconCSS}
`;
export const BellIcon = styled(Notifications)`
  ${iconCSS}
`;
export const EmailIcon = styled(Email)`
  ${iconCSS}
`;
export const FavoriteIcon = styled(FavoriteBorder)`
  ${iconCSS}
`;
export const ProfileIcon = styled(Person)`
  ${iconCSS}
`;
