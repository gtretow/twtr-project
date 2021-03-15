import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;

  > label {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
`;

export const Form = styled.form`
  display: flex;
  margin-top: 4rem;

  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
`;

export const Button = styled.button`
  background: transparent;
  color: var(--twitter);
  border: 1px solid var(--twitter);
  padding: 4px 16px;
  border-radius: 25px;
  font-weight: bold;
  font-size: 12px;
  margin-bottom: 1rem;

  cursor: pointer;
  outline: 0;

  &:hover {
    background: var(--twitter-dark-hover);
  }

  @media (min-width: 320px) {
    width: 100%;
    padding: 10px 19px;
    font-size: 15px;
  }
`;

export const Input = styled.input`
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
`;
