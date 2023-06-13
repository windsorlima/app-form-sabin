import { BackButton } from "../../components/BackButton";
import { useControlApp } from "../../hooks/app";
import { Container, Message, Info } from "./styles";
import { useNavigate } from "react-router-dom";

export const SuccessPage = () => {
  const { appData } = useControlApp();
  let navigate = useNavigate();

  const { selectedRequestChoice, selectedSolicitation, fouls, justification } =
    appData;

  return (
    <Container>
      <Message>
        Sua falta foi justificada com sucesso! Segue abaixo as informações:
      </Message>

      <Info>
        <div>
          <span>Descrição da(s) falta(s):</span>
          {selectedRequestChoice && selectedRequestChoice === "future_fouls" ? (
            <>
              <span>De: {new Date(appData.fromDate).toLocaleDateString()}</span>
              <span>Até: {new Date(appData.toDate).toLocaleDateString()}</span>
            </>
          ) : (
            <span>{fouls ? fouls.map((foul) => foul.description) : []}</span>
          )}
        </div>
        <div>
          <span>Sua justificativa:</span>
          <span>{justification ? justification : ""}</span>
        </div>
      </Info>

      <BackButton
        onClick={() => {
          navigate("/");
        }}
      >
        Voltar
      </BackButton>
    </Container>
  );
};
