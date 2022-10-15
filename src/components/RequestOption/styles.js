import styled from "styled-components";

export const Container = styled.div`
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
