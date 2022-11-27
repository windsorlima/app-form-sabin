import { getRequestChoiceObject, getSolicitationObject } from "../../utils";
import { useControlApp } from "../../hooks/app";
import {
  ButtonRow,
  ChoiceInfo,
  Container,
  SolicitationInfo,
  StudentInfo,
} from "./styles";
import { StudentActivities } from "../../components/StudentActivities";
import { useCallback, useMemo, useState } from "react";
import { BackButton } from "../../components/BackButton";
import { NextButton } from "../../components/NextButton";
import { useNavigate } from "react-router-dom";

export const Activities = () => {
  const [selectedActivities, setSelectedActivities] = useState([]);
  const { appData, setAppData } = useControlApp();
  let navigate = useNavigate();
  const { selectedStudent, selectedSolicitation, selectedRequestChoice } =
    appData;
  const solicitation = getSolicitationObject(selectedSolicitation);
  const requestChoice = getRequestChoiceObject(selectedRequestChoice);
  const setActivities = useCallback(() => {
    setAppData({ ...appData, activities: selectedActivities });
  }, [selectedActivities, setAppData, appData]);

  const setActivity = useCallback(
    (event) => {
      if (selectedActivities.includes(event)) {
        setSelectedActivities(
          selectedActivities.filter((activity) => activity !== event)
        );
      } else {
        setSelectedActivities([...selectedActivities, event]);
      }
    },
    [selectedActivities]
  );

  const activitiesList = useMemo(
    () => [
      { name: "Basquete", value: "basketball" },
      { name: "Vôlei", value: "voleyball" },
      { name: "Xadrez", value: "chess" },
    ],
    []
  );

  const selectAll = useCallback(() => {
    setSelectedActivities(activitiesList.map((activity) => activity.value));
  }, [activitiesList]);

  return (
    <Container>
      <div>
        <StudentInfo>
          <span> {selectedStudent.name} </span>
          <span> {selectedStudent.grade} </span>
        </StudentInfo>
        <SolicitationInfo>
          <span> Solicitação requisitada:</span>
          <span>{solicitation.label}</span>
        </SolicitationInfo>
        <ChoiceInfo>
          <span> Opção escolhida:</span>
          <span>{requestChoice.label}</span>
        </ChoiceInfo>
        <StudentActivities
          activities={activitiesList}
          selectedActivities={selectedActivities}
          setActivity={(event) => setActivity(event)}
          selectAll={selectAll}
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
          disabled={!selectedActivities.length}
          onClick={() => {
            setActivities();
            navigate("/form");
          }}
        >
          Continuar
        </NextButton>
      </ButtonRow>
    </Container>
  );
};
