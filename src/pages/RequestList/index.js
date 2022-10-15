import { useState } from "react";
import { BackButton } from "../../components/BackButton";
import { NextButton } from "../../components/NextButton";
import { RequestOptions } from "../../components/RequestOptions";
import { useControlApp } from "../../hooks/app";
import { ButtonRow, Container, StudentInfo } from "./styles";

export const RequestList = () => {
  const { appData } = useControlApp();
  const [selectedOption, setSelectedOption] = useState("");

  const { selectedStudent } = appData;

  return (
    <Container>
      <div>
        <StudentInfo>
          <span> {selectedStudent.name} </span>
          <span> {selectedStudent.grade} </span>
        </StudentInfo>
        <RequestOptions
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      </div>

      <ButtonRow>
        <BackButton> Voltar</BackButton>
        <NextButton
          disabled={!selectedOption}
          onClick={() => alert("Para de faltar")}
        >
          Continuar
        </NextButton>
      </ButtonRow>
    </Container>
  );
};
