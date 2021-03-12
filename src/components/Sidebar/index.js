import styled from "styled-components";

import { Search } from "../../styles/icons";

export const Container = styled.div`
  display: none;
  @media (min-width: 1000px) {
    display: flex;
    flex-direction: column;
    width: min(400px, 100%);
  } ;
`;

export const SearchWrapper = styled.div``;
export const SearchBar = styled.div``;
export const Body = styled.div``;

export const SearchIcon = styled(Search)`
  width: 27px;
  height: 27px;
  fill: var(--gray);
`;
