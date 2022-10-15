import { ButtonText, Container } from "./styles";

export const BaseButton = ({
  children,
  width = "100%",
  padding = "10px",
  color = "#000",
  backgroundColor = "#fff",
  fontWeight = "bold",
  ...rest
}) => {
  return (
    <Container
      width={width}
      padding={padding}
      color={color}
      backgroundColor={backgroundColor}
      {...rest}
    >
      <ButtonText fontWeight={fontWeight}>{children}</ButtonText>
    </Container>
  );
};
