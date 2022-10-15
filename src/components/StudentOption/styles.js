import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px;

  border: 1px solid #f7f8f8;
  border-radius: 12px;

  background-color: #ffffff;

  & > div:first-of-type {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
  }
`;

export const IconBox = styled.div`
  display: flex;
  align-items: center;

  & > svg {
    width: 32px;
    height: 32px;
    fill: #6b65c1;
  }
`;

export const InfoStudent = styled.div`
  display: flex;
  flex-direction: column;

  & > span {
    text-transform: uppercase;
  }

  & > span:first-of-type {
    color: #6b65c1;
    font-size: 16px;
  }

  & > span:last-of-type {
    color: #62656a;
    font-size: 15px;
  }
`;
