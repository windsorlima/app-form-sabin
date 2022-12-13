import styled from "styled-components";

export const Container = styled.div`
  height: 620px;
  max-height: 620px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & > div:first-of-type {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 10px;
    padding: 16px;
  }

  background-color: #f4f6f8;
`;

export const ButtonRow = styled.div`
  display: flex;
  padding: 16px;
`;
