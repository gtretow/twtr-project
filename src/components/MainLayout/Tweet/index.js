import styled, { css } from "styled-components";
/* import { prop, switchProp } from "styled-tools"; */
import { Chat, Replay, Favorite } from "../../../styles/icons";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 14px 16px;
  border-bottom: 1px solid var(--outline);
  max-width: 100%;
`;

export const Body = styled.div`
  flex-direction: column;
  display: flex;
  margin-top: 3px;
  position: relative;
`;

export const Avatar = styled.div`
  width: 49px;
  height: 49px;
  border-radius: 50px;
  flex-shrink: 0;
  background: var(--gray);

  position: absolute;
  top: 0;
  left: 0;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin-top: 2px;
  padding-left: 59px;
  margin-bottom: 15px;
  border-bottom: 1px solid var(--search);
`;
export const Header = styled.div`
  display: flex;
  align-items: center;

  font-size: 15px;
  white-space: nowrap;

  > strong {
    margin-right: 5px;
  }

  > span,
  time {
    color: var(--gray);
  }

  > strong,
  span {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

export const Dot = styled.div`
  background: var(--gray);
  width: 2px;
  height: 2px;
  margin: 0 10px;
`;

export const Description = styled.p`
  font-size: 14px;
  margin-top: 4px;
`;

export const ImageContent = styled.div`
  margin-top: 12px;
  width: 100%;
  height: 285px;
  background: var(--outline);
  border-radius: 14px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }

  @media (min-width: 500px) {
  }

  @media (min-width: 1200px) {
  }
`;

export const Status = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;

  > svg {
    margin-right: 5px;
  }
  /* cores passadas por aqui para mudar a cor do SVG e do SPAN pelo menos lugar */
  &:nth-child(1) {
    &,
    > svg path {
      color: var(--gray);
    }
  }
  &:nth-child(2) {
    color: ${(props) => (props.color ? "black" : "var(--retweet)")};

    > svg path {
      fill: ${(props) => (props.fill ? "black" : "var(--retweet)")};
    }
  }

  &:nth-child(3) {
    color: var(--like);
    > svg path {
      color: var(--like);
    }
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 11px auto 14px;

  width: 100%;

  @media (min-width: 330px) {
    width: 63%;
  }
  > div {
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
  }
  color: var(--gray);
`;

const iconsCSS = css`
  width: 19px;
  height: 19px;
`;

export const CommentIcon = styled(Chat)`
  ${iconsCSS}
`;
export const RetweetIcon = styled(Replay)`
  ${iconsCSS}
`;
export const LikeIcon = styled(Favorite)`
  ${iconsCSS}
`;
