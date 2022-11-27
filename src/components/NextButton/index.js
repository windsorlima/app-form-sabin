import { Container } from "./styles";

export const NextButton = ({
  color = "green",
  backgroundColor = "white",
  children = "Continuar",
  ...rest
}) => {
  return (
    <Container color={color} backgroundColor={backgroundColor} {...rest}>
      {children}
    </Container>
  );
};
