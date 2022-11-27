import { Container, Label, Error, InputBox } from "./styles";

export const InputDate = ({ label, name, register, error, ...rest }) => {
  return (
    <Container>
      <InputBox>
        <Label>{label}</Label>
        <input type="date" {...register(name)} name={name} {...rest} />
      </InputBox>
      <Error>{error}</Error>
    </Container>
  );
};
