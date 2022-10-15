import { Container, IconBox, InfoStudent } from "./styles";
import { ReactComponent as StudentImage } from "../../assets/user.svg";
import { BaseButton } from "../BaseButton";

export const StudentOption = ({ student, selectStudent }) => {
  return (
    <Container>
      <div>
        <IconBox>
          <StudentImage />
        </IconBox>
        <InfoStudent>
          <span>{student.name}</span>
          <span>{student.grade}</span>
        </InfoStudent>
      </div>
      <div>
        <BaseButton
          onClick={() => selectStudent(student)}
          padding="5px 0"
          color="#454D57"
          fontWeight="semi-bold"
        >
          Continuar
        </BaseButton>
      </div>
    </Container>
  );
};
