import styled from "styled-components";

export const Container = styled.div`
  margin-left: 15px;
`;

export const Link = styled.a`
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: var(--gray);
  }

  > span {
    display: inline;
    color: var(--gray);
    font-size: 13px;
    margin-right: 7px;
  }
`;
