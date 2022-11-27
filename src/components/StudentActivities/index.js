import { Activity } from "../Activity";
import { Container } from "./styles";
import { NextButton } from "../../components/NextButton";

export const StudentActivities = ({
  activities,
  setActivity,
  selectedActivities,
  selectAll,
}) => {
  return (
    <Container>
      <span>Escolha a(s) atividade(s):</span>
      {activities.map((activity) => (
        <Activity
          key={activity.value}
          activity={activity}
          setActivity={(event) => setActivity(event)}
          selectedActivities={selectedActivities}
        />
      ))}
      <NextButton onClick={selectAll} backgroundColor="white" color="#6b65c1">
        Selecionar tudo
      </NextButton>
    </Container>
  );
};
