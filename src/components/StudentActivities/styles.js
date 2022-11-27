import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px;

  border: 1px solid #f7f8f8;
  border-radius: 12px;

  background-color: #ffffff;

  gap: 15px;

  & > span {
    font-size: 16px;
  }
`;
