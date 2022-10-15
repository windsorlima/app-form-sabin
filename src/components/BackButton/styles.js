import styled from "styled-components";
import { BaseButton } from "../BaseButton";

export const Container = styled(BaseButton)`
  background-color: ${(props) => `${props.backgroundColor}`};
  color: ${(props) => props.color};

  border-radius: 6px;

  &:hover {
    background-color: ${(props) => props.color};
    color: ${(props) => props.backgroundColor};
  }
`;
