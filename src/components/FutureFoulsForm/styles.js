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

  > form {
    display: flex;
    flex-direction: column;

    gap: 20px;
  }
`;

export const DateBox = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const JustificationBox = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 5px;

  & > textarea {
    padding: 5px;
    min-height: 100px;
    font-size: 16px;
  }

  & > span {
    color: red;
  }
`;

export const FileBox = styled.div``;

export const SuccessText = styled.p`
  text-align: center;
  color: green;
`;
