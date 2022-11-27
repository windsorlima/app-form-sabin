import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BackButton } from "../../components/BackButton";
import { NextButton } from "../../components/NextButton";
import { useControlApp } from "../../hooks/app";
import { getRequestChoiceObject, getSolicitationObject } from "../../utils";
import {
  ButtonRow,
  ChoiceInfo,
  Container,
  FoulsBox,
  SolicitationInfo,
  StudentInfo,
  Foul,
} from "./styles";

export const ExistingFouls = () => {
  const { appData, setAppData } = useControlApp();
  let navigate = useNavigate();
  const { selectedStudent, selectedSolicitation, selectedRequestChoice } =
    appData;
  const solicitation = getSolicitationObject(selectedSolicitation);
  const requestChoice = getRequestChoiceObject(selectedRequestChoice);
  const [isLoading, setIsLoading] = useState(false);
  const [fouls, setFouls] = useState([]);
  const [selectedFouls, setSelectedFouls] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const getFouls = async () => {
      const response = await axios.get(
        "http://localhost:3500/student/getFouls",
        {
          params: {
            ra: selectedStudent.id,
          },
        }
      );

      setFouls(response.data);
    };

    getFouls().then(() => setIsLoading(false));
  }, [selectedStudent.id]);

  const selectFoul = useCallback(
    (foul) => {
      if (selectedFouls.includes(foul)) {
        setSelectedFouls((s) =>
          s.filter((element) => element.code !== foul.code)
        );
      } else {
        setSelectedFouls((s) => s.concat(foul));
      }
    },
    [selectedFouls]
  );

  const setFoulsInStore = useCallback(() => {
    setAppData({ ...appData, fouls: selectedFouls });
  }, [appData, setAppData, selectedFouls]);

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
        <FoulsBox>
          {isLoading
            ? "Carregando faltas ... "
            : fouls.map((foul) => (
                <Foul
                  isSelected={selectedFouls.includes(foul)}
                  onClick={() => selectFoul(foul)}
                >
                  <span>{foul.description}</span>
                </Foul>
              ))}
        </FoulsBox>
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
          disabled={false}
          onClick={() => {
            setFoulsInStore();
            navigate("/form");
          }}
        >
          Continuar
        </NextButton>
      </ButtonRow>
    </Container>
  );
};
