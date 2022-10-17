import { getRequestChoiceObject, getSolicitationObject } from "../../utils";
import { useControlApp } from "../../hooks/app";
import { ChoiceInfo, Container, SolicitationInfo, StudentInfo } from "./styles";

export const Activities = () => {
  const { appData, setAppData } = useControlApp();
  const { selectedStudent, selectedSolicitation, selectedRequestChoice } =
    appData;
  const solicitation = getSolicitationObject(selectedSolicitation);
  const requestChoice = getRequestChoiceObject(selectedRequestChoice);

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
      </div>
    </Container>
  );
};
