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
import { useCallback, useEffect, useMemo, useState } from "react";
import { BackButton } from "../../components/BackButton";
import { NextButton } from "../../components/NextButton";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { api } from "../../service/api";

export const Activities = () => {
  const [selectedActivities, setSelectedActivities] = useState([]);
  const [isLoadingActivities, setIsLoadingActivities] = useState(false);
  const [activitiesList, setActivitiesList] = useState([]);
  const { appData, setAppData } = useControlApp();
  let navigate = useNavigate();
  const { selectedStudent, selectedSolicitation, selectedRequestChoice } =
    appData;
  const solicitation = getSolicitationObject(selectedSolicitation);
  const requestChoice = getRequestChoiceObject(selectedRequestChoice);
  const setActivities = useCallback(() => {
    setAppData({ ...appData, activities: selectedActivities });
  }, [selectedActivities, setAppData, appData]);

  useEffect(() => {
    const getActivities = async () => {
      try {
        setIsLoadingActivities(true);

        const activities = await api.get("/student/activities", {
          params: {
            ra: selectedStudent.id,
          },
        });

        setActivitiesList(activities.data);
      } catch (error) {
        setActivitiesList([{ name: error.response.data.message, value: "" }]);
      }
    };

    getActivities()
      .then(() => setIsLoadingActivities(false))
      .catch(() => setIsLoadingActivities(false));
  }, [selectedStudent.id]);

  const setActivity = useCallback(
    (event) => {
      if (event === "") {
        return;
      }

      const currentActivity = activitiesList.find(
        (element) => element.value === event
      );
      if (selectedActivities.includes(currentActivity)) {
        setSelectedActivities(
          selectedActivities.filter((activity) => activity.value !== event)
        );
      } else {
        setSelectedActivities([...selectedActivities, currentActivity]);
      }
    },
    [selectedActivities, activitiesList]
  );

  const selectAll = useCallback(() => {
    if (activitiesList.length === 1 && activitiesList[0].value === "") {
      return;
    }
    setSelectedActivities(activitiesList.map((activity) => activity));
  }, [activitiesList]);

  return (
    <Container>
      <div>
        <StudentInfo>
          <span> {selectedStudent ? selectedStudent.name : ""} </span>
          <span> {selectedStudent ? selectedStudent.grade : ""} </span>
        </StudentInfo>
        <SolicitationInfo>
          <span> Solicitação requisitada:</span>
          <span>{solicitation ? solicitation.label : ""}</span>
        </SolicitationInfo>
        <ChoiceInfo>
          <span> Opção escolhida:</span>
          <span>{requestChoice ? requestChoice.label : ""}</span>
        </ChoiceInfo>
        {!activitiesList.length || isLoadingActivities ? (
          <span>Loading ... </span>
        ) : (
          <StudentActivities
            activities={activitiesList}
            selectedActivities={selectedActivities}
            setActivity={(event) => setActivity(event)}
            selectAll={selectAll}
          />
        )}
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
