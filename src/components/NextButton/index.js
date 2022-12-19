import { Loading } from "../Loading";
import { Container } from "./styles";

export const NextButton = ({
  color = "green",
  backgroundColor = "white",
  children = "Continuar",
  isLoading = false,
  ...rest
}) => {
  return (
    <Container color={color} backgroundColor={backgroundColor} {...rest}>
      {isLoading ? <Loading /> : children}
    </Container>
  );
};
