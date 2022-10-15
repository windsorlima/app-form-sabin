import { useCallback, useState } from "react";
import { BaseButton } from "../BaseButton";
import { RequestOption } from "../RequestOption";
import { ButtonRow, Container, Title } from "./styles";

export const RequestOptions = ({ selectedOption, setSelectedOption }) => {
  const options = [
    { label: "Justificativa de faltas", value: "fauls_justification" },
    { label: "Informar algo", value: "info_something" },
  ];

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
      {options.map((option) => (
        <RequestOption
          name={option.label}
          isSelected={selectedOption === option.value}
          selectOption={() => selectOption(option.value)}
        />
      ))}
    </Container>
  );
};
