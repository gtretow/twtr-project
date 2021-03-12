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

export const SearchWrapper = styled.div`
  padding: 10px 24px;
  /*   selects the smallest (most negative) value from a list of comma-separated expressions*/
  width: min(400px, 100%);
  /* max escolhe o maior valor entre os valores i.e (60px, 5vw) o valor será 60px até que a tela permita 5vw ser > que 60px*/
  position: fixed;
  top: 0;
  z-index: 2;
  /*   2 camadas na frente */

  max-height: 57px;
`;

export const SearchBar = styled.input`
  width: 100%;
  background: var(--search);
  border-radius: 19.5px;
  height: 40px;
  font-size: 14px;
  padding: 0 10px 0 52px;
  position: relative;
  outline: 0;
  &::placeholder {
    color: var(--gray);
  }

  ~ svg {
    /* colocar icone dentro do input */
    position: relative;
    top: -33px;
    left: 15px;
    z-index: 1;
    transition: 180ms ease-in-out;
  }

  &:focus {
    border: 1px solid var(--twitter);
    fill: var(--gray);
  }
`;
export const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 57px 24px 200px;
  margin-top: 3px;
  > div + div {
    margin-top: 15px;
  }
`;

export const SearchIcon = styled(Search)`
  width: 27px;
  height: 27px;
  fill: var(--gray);
`;
