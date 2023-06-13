import { ButtonRow, Container } from "./styles";
import { useControlApp } from "../../hooks/app";
import { FutureFoulsForm } from "../../components/FutureFoulsForm";
import { ExistingFoulsForm } from "../../components/ExistingFoulsForm";
import { useCallback } from "react";
import { BackButton } from "../../components/BackButton";
import { useNavigate } from "react-router-dom";

export const FormPage = () => {
  const { appData, setAppData } = useControlApp();
  let navigate = useNavigate();

  const { selectedRequestChoice } = appData;

  const getForm = useCallback(() => {
    if (selectedRequestChoice === "future_fouls")
      return (
        <FutureFoulsForm
          appData={appData}
          navigate={navigate}
          setAppData={setAppData}
        />
      );

    return (
      <ExistingFoulsForm
        appData={appData}
        navigate={navigate}
        setAppData={setAppData}
      />
    );
  }, [selectedRequestChoice, appData, navigate, setAppData]);

  return (
    <Container>
      <div>{getForm()}</div>
      <ButtonRow>
        <BackButton
          onClick={() => {
            navigate(-1);
          }}
        >
          Voltar
        </BackButton>
      </ButtonRow>
    </Container>
  );
};
