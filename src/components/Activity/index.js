import { BsPersonCheck } from "react-icons/bs";
import { Container } from "./styles";

export const Activity = ({ activity, setActivity, selectedActivities }) => {
  const isSelected = selectedActivities.includes(activity);

  return (
    <Container
      isSelected={isSelected}
      onClick={() => setActivity(activity.value)}
    >
      <span>{activity.name}</span>
      {isSelected && <BsPersonCheck size={20} style={{ fill: "white" }} />}
    </Container>
  );
};
