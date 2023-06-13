import styled from "styled-components";

export const Container = styled.div`
  height: fit-content;
  max-height: 620px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;

  background-color: #f4f6f8;
`;

export const Message = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;
  padding-bottom: 10px;
  font-size: 18px;
`;

export const Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 10px;
  margin-bottom: 20px;

  border: 1px solid #f7f8f8;
  border-radius: 12px;

  background-color: #ffffff;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  & > div > span:first-of-type {
    color: #6b65c1;
    font-size: 16px;
  }

  & > div > span {
    color: #62656a;
    font-size: 15px;
  }
`;
