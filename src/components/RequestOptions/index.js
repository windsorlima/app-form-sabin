import { useCallback } from "react";
import { arrayOptions } from "../../constants/requestOptions";
import { RequestOption } from "../RequestOption";
import { Container, Title } from "./styles";

export const RequestOptions = ({ selectedOption, setSelectedOption }) => {
  const selectOption = useCallback(
    (option) => {
      if (selectedOption === option) {
        setSelectedOption("");
      } else {
        setSelectedOption(option);
      }
    },
    [selectedOption, setSelectedOption]
  );

  return (
    <Container>
      <Title>Selecione uma solicitação:</Title>
      {arrayOptions.map((option) => (
        <RequestOption
          name={option.label}
          isSelected={selectedOption === option.value}
          selectOption={() => selectOption(option.value)}
          key={option.value}
        />
      ))}
    </Container>
  );
};
