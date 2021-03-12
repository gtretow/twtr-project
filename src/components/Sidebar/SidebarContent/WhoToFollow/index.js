import styled from "styled-components";

export const Title = styled.span`
  font-weight: bold;
  font-size: 19px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--search);
  border-radius: 14px;
`;

export const Item = styled.div`
  padding: 10px 16px;

  &:first-child {
    padding-top: 16px;
  }
  &:last-child {
    padding-bottom: 16px;
  }

  & + div {
    border-top: 1px solid var(--outline);
  }
`;

export const Avatar = styled.div`
  display: flex;

  width: 49px;
  height: 49px;
  background: var(--gray);
  border-radius: 50%;
  margin-right: 10px;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const FollowButton = styled.button`
  align-items: center;

  margin-left: 250px;
  background: transparent;
  color: var(--twitter);
  border: 1px solid var(--twitter);
  padding: 6px 17px;
  border-radius: 25px;
  font-weight: bold;
  font-size: 12px;
  cursor: pointer;

  &:hover {
    background: var(--twitter-dark-hover);
  }
`;
