import { StudentOption } from "../StudentOption";
import { Container } from "./styles";

export const StudentList = ({ students, selectStudent }) => {
  return (
    <Container>
      {students.map((student, index) => (
        <StudentOption
          key={`${student.name}-${index}`}
          selectStudent={(student) => selectStudent(student)}
          student={student}
        />
      ))}
    </Container>
  );
};
