import { Container } from "./styles";
import { useControlApp } from "../../hooks/app";
import { FutureFoulsForm } from "../../components/FutureFoulsForm";
import { ExistingFoulsForm } from "../../components/ExistingFoulsForm";
import { useCallback } from "react";

export const FormPage = () => {
  const { appData, setAppData } = useControlApp();

  const { selectedRequestChoice } = appData;

  const getForm = useCallback(() => {
    if (selectedRequestChoice === "future_fouls") return <FutureFoulsForm />;

    return <ExistingFoulsForm appData={appData} />;
  }, [selectedRequestChoice, appData]);

  return (
    <Container>
      <div>{getForm()}</div>
    </Container>
  );
};
