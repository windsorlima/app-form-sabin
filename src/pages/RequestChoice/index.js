import { useControlApp } from "../../hooks/app";
import { ButtonRow, Container, SolicitationInfo, StudentInfo } from "./styles";
import { getSolicitationObject } from "../../utils";
import { RequestChoose } from "../../components/RequestChoose";
import { useCallback, useState } from "react";
import { BackButton } from "../../components/BackButton";
import { NextButton } from "../../components/NextButton";
import { useNavigate } from "react-router-dom";

export const RequestChoice = () => {
  const { appData, setAppData } = useControlApp();
  const { selectedStudent, selectedSolicitation } = appData;
  const solicitation = getSolicitationObject(selectedSolicitation);
  let navigate = useNavigate();

  const [selectedOption, setSelectedOption] = useState();

  const setRequestChoice = useCallback(() => {
    setAppData({ ...appData, selectedRequestChoice: selectedOption });
  }, [appData, setAppData, selectedOption]);

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
      <div>
        <StudentInfo>
          <span> {selectedStudent ? selectedStudent.name : ""} </span>
          <span> {selectedStudent ? selectedStudent.name : ""} </span>
        </StudentInfo>
        <SolicitationInfo>
          <span> Solicitação requisitada:</span>
          <span>{solicitation ? solicitation.label : ""}</span>
        </SolicitationInfo>
        <RequestChoose
          selectedSolicitation={solicitation ? solicitation.value : ""}
          setSelectedOption={(option) => selectOption(option)}
          selectedOption={selectedOption}
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
            setRequestChoice();
            if (selectedOption === "past_fouls") {
              navigate("/existingFouls");
            } else {
              navigate("/activities");
            }
          }}
        >
          Continuar
        </NextButton>
      </ButtonRow>
    </Container>
  );
};
