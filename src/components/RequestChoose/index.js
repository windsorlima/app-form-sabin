import { Container } from "./styles";
import { FoulsOptions } from "../FoulsOptions";

export const RequestChoose = ({
  selectedOption,
  setSelectedOption,
  selectedSolicitation,
}) => {
  return (
    <Container>
      <span>Selecione uma opção:</span>
      {selectedSolicitation === "justification_absences" && (
        <FoulsOptions
          selectedOption={selectedOption}
          setSelectedOption={(option) => setSelectedOption(option)}
        />
      )}
    </Container>
  );
};
