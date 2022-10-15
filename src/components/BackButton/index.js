import { Container } from "./styles";

export const BackButton = ({
  color = "red",
  backgroundColor = "white",
  ...rest
}) => {
  return (
    <Container color={color} backgroundColor={backgroundColor} {...rest}>
      Voltar
    </Container>
  );
};
