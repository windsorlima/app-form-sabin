import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BackButton } from "../../components/BackButton";
import { NextButton } from "../../components/NextButton";
import { RequestOptions } from "../../components/RequestOptions";
import { useControlApp } from "../../hooks/app";
import { ButtonRow, Container, StudentInfo } from "./styles";

export const RequestList = () => {
  const { appData, setAppData } = useControlApp();
  const [selectedOption, setSelectedOption] = useState("");
  let navigate = useNavigate();

  const { selectedStudent } = appData;

  const setRequest = useCallback(() => {
    setAppData({ ...appData, selectedSolicitation: selectedOption });
  }, [appData, setAppData, selectedOption]);

  return (
    <Container>
      <div>
        <StudentInfo>
          <span> {selectedStudent ? selectedStudent.name : ""} </span>
          <span> {selectedStudent ? selectedStudent.grade : ""} </span>
        </StudentInfo>
        <RequestOptions
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      </div>

      <ButtonRow>
        <BackButton
          onClick={() => {
            navigate(-1);
          }}
        >
          Voltar
        </BackButton>
        <NextButton
          disabled={!selectedOption}
          onClick={() => {
            setRequest();
            navigate("/request");
          }}
        >
          Continuar
        </NextButton>
      </ButtonRow>
    </Container>
  );
};
