import styled, { css } from "styled-components";

import {
  ArrowLeft,
  Home,
  Search,
  Notifications,
  Email,
} from "../../styles/icons";

export const Container = styled.div`
  /* always mobile first */
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (min-width: 1000px) {
    width: 50%;
  } ;
`;
export const Header = styled.div`
  > button {
    padding: 8px;
    border-radius: 50%;
    outline: 0;
  }
  /* Sticky positioning is a hybrid of relative and fixed positioning. The element is treated as relative positioned until it crosses a specified threshold, at which point it is treated as fixed positioned. */
  position: sticky;
  display: flex;
  align-items: center;
  text-align: left;
  padding: 9px 0 9px 13 px;
  border-bottom: 1px solid var(--outline);
  z-index: 2;
  top: 0;
`;
export const Bio = styled.div`
  margin-left: 17px;
  display: flex;
  flex-direction: column;
  > strong {
    font-size: 1.3rem;
  }

  > span {
    font-size: 1rem;
    color: var(--gray);
  }
`;

export const RSideBar = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2;

  @media (min-width: 500px) {
    display: none;
  }
  width: 100%;
  border-top: 1px solid var(--outline);
  display: flex;
  justify-content: space-between;
  padding: 8px 30px;
`;

const iconCSS = css`
  width: 31px;
  height: 31px;

  cursor: pointer;

  fill: var(--gray);
  &:hover &.active {
    fill: var(--twitter);
  }
`;

export const HomeIcon = styled(Home)`
  ${iconCSS}
`;
export const SearchIcon = styled(Search)`
  ${iconCSS}
`;
export const BellIcon = styled(Notifications)`
  ${iconCSS}
`;
export const EmailIcon = styled(Email)`
  ${iconCSS}
`;
export const BackIcon = styled(ArrowLeft)`
  ${iconCSS}
`;
