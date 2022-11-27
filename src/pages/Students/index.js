import { useCallback, useEffect, useState } from "react";
import { StudentList } from "../../components/StudentList";
import { useControlApp } from "../../hooks/app";
import { useNavigate } from "react-router-dom";
import { Container } from "./styles";
import axios from "axios";

export const Students = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { appData, setAppData } = useControlApp();
  const { students } = appData;
  let navigate = useNavigate();

  useEffect(() => {
    if (!students.length) {
      setIsLoading(true);
      const connectLayer = async () => {
        await window.LayersPortal.readyPromise;
        await window.LayersPortal.connectedPromise;
        const { userId, communityId, session } = window.LayersPortal;

        const auth = await axios.post(`http://localhost:3500/user/auth`, {
          userId,
          communityId,
          session,
        });

        if (auth.status === 200) {
          const responseStudents = await axios.get(
            `http://localhost:3500/student/list`,
            {
              params: { userId, community: communityId, session },
            }
          );

          setAppData({ ...appData, students: responseStudents.data });
        }
      };

      connectLayer().then(() => setIsLoading(false));
    }
  }, []);

  const selectStudent = useCallback(
    (student) => {
      setAppData({ ...appData, selectedStudent: student });
      navigate("/student");
    },
    [appData, navigate, setAppData]
  );

  return (
    <Container>
      {isLoading ? (
        <span>Carregando .. </span>
      ) : (
        <StudentList
          students={appData.students}
          selectStudent={(student) => selectStudent(student)}
        />
      )}
    </Container>
  );
};
