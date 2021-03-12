import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--search);
  border-radius: 14px;
`;

export const Item = styled.div`
  padding: 10px 16px;

  &:first-child {
    padding-top: 15px;
  }

  &:last-child {
    padding-bottom: 15px;
  }

  & + div {
    border-top: 1px solid var(--outline);
  }
`;

export const Title = styled.span`
  font-weight: bold;
  font-size: 19px;

  
`;
