import { Container } from "./styles";
import { useControlApp } from "../../hooks/app";
import { FutureFoulsForm } from "../../components/FutureFoulsForm";
import { ExistingFoulsForm } from "../../components/ExistingFoulsForm";

export const FormPage = () => {
  const { appData, setAppData } = useControlApp();

  return (
    <Container>
      <div>
        <ExistingFoulsForm />
      </div>
    </Container>
  );
};
