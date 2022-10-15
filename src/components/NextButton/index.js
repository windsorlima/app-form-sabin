import { Container } from "./styles";

export const NextButton = ({
  color = "green",
  backgroundColor = "white",
  ...rest
}) => {
  return (
    <Container color={color} backgroundColor={backgroundColor} {...rest}>
      Continuar
    </Container>
  );
};
