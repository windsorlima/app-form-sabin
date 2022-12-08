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

export const FoulsBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 5px;

  border: 1px solid #f7f8f8;
  border-radius: 12px;

  background-color: #ffffff;
  overflow: auto;
`;

export const Foul = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 10px;

  border: 1px solid #6b65c1;
  border-radius: 10px;
  transition: 0.3ms;

  cursor: pointer;

  background-color: ${(props) =>
    props.isSelected ? "#6b65c1" : "transparent"};

  & > span {
    color: ${(props) => (props.isSelected ? "#fff" : "#6b65c1")};
    font-size: 16px;
  }

  &:hover {
    background-color: #6b65c1;

    & > span {
      color: #fff;
    }
  }
`;

export const ButtonRow = styled.div`
  display: flex;
  padding: 16px;
`;
