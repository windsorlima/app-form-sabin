import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  justify-content: center;

  border: 2px solid #f3f3f3;
  border-radius: 4px;

  width: ${(props) => props.width};
  padding: ${(props) => props.padding};
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};

  transition: 0.2s;

  &:hover {
    background-color: #f3f3f3;
  }
`;

export const ButtonText = styled.span`
  font-weight: ${(props) => props.fontWeight};
`;
