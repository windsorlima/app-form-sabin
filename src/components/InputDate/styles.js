import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const InputBox = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 5px;

  border: 1px solid black;
  border-radius: 6px;
  padding: 5px;

  & > input {
    border: none;
    width: 100%;
  }
`;

export const Label = styled.label``;

export const Error = styled.span`
  margin-top: 10px;
  color: red;
`;
