import styled from "styled-components";

export const Container = styled.div`
  /* always mobile first */
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (min-width: 1000px) {
    width: 50%;
  } ;
`;
export const Header = styled.div``;
export const Bio = styled.div``;
export const RSideBar = styled.div``;

export const HomeIcon = styled.div``;
export const SearchIcon = styled.div``;
export const BellIcon = styled.div``;
export const EmailIcon = styled.div``;
export const BackIcon = styled.div``;
