import styled from "styled-components";

export const Container = styled.div`
  max-width: 414px;
  height: 600px;
  max-height: 600px;
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

export const StudentInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px;

  border: 1px solid #f7f8f8;
  border-radius: 12px;

  background-color: #ffffff;

  & > span:first-of-type {
    color: #6b65c1;
    text-transform: uppercase;
    font-size: 16px;
  }

  & > span:last-of-type {
    color: #62656a;
    font-size: 15px;
  }
`;

export const ChoiceInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 5px;

  border: 1px solid #f7f8f8;
  border-radius: 12px;

  background-color: #ffffff;

  & > span:first-of-type {
    color: #6b65c1;
    font-size: 16px;
  }

  & > span:last-of-type {
    color: #62656a;
    font-size: 15px;
  }
`;

export const SolicitationInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 5px;

  border: 1px solid #f7f8f8;
  border-radius: 12px;

  background-color: #ffffff;

  & > span:first-of-type {
    color: #6b65c1;
    font-size: 16px;
  }

  & > span:last-of-type {
    color: #62656a;
    font-size: 15px;
  }
`;

export const ButtonRow = styled.div`
  display: flex;
  padding: 16px;
`;
