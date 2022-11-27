import { Container } from "./styles";
import { BsPersonCheck } from "react-icons/bs";
import { foulsOptions } from "../../constants/requestOptions";

export const FoulsOptions = ({ selectedOption, setSelectedOption }) => {
  return (
    <>
      {foulsOptions.map((option) => (
        <Container
          isSelected={selectedOption === option.value}
          onClick={() => setSelectedOption(option.value)}
          key={option.value}
        >
          <span> {option.label}</span>
          {selectedOption === option.value && (
            <BsPersonCheck size={20} style={{ fill: "white" }} />
          )}
        </Container>
      ))}
    </>
  );
};
