import { Container } from "./styles";
import { BsPersonCheck } from "react-icons/bs";

export const RequestOption = ({ name, selectOption, isSelected }) => {
  return (
    <Container onClick={selectOption} isSelected={isSelected}>
      <span> {name}</span>
      {isSelected && <BsPersonCheck size={20} style={{ fill: "white" }} />}
    </Container>
  );
};
