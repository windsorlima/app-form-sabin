import { useCallback } from "react";
import { StudentList } from "../../components/StudentList";
import { useControlApp } from "../../hooks/app";
import { useNavigate } from "react-router-dom";
import { Container } from "./styles";

export const Students = () => {
  const { appData, setAppData } = useControlApp();
  let navigate = useNavigate();

  const selectStudent = useCallback(
    (student) => {
      setAppData({ appData, selectedStudent: student });
      navigate("/student");
    },
    [appData]
  );

  return (
    <Container>
      <StudentList
        students={[
          {
            name: "Beatriz da Silva Nobrega",
            grade: " 3 série - Ensino Médio",
          },
          {
            name: "Leonardo da Silva Nobrega",
            grade: " 8 ano - Ensino Fundamental II",
          },
        ]}
        selectStudent={(student) => selectStudent(student)}
      />
    </Container>
  );
};
