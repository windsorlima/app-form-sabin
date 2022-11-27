import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { futureFoulsSchema } from "./schema";
import { Container, DateBox, JustificationBox, FileBox } from "./styles";
import { InputDate } from "../InputDate";

export const FutureFoulsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(futureFoulsSchema) });

  return (
    <Container>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
          reset();
        })}
      >
        <DateBox>
          <InputDate
            register={register}
            error={errors.fromDate?.message}
            name="fromDate"
            label="De:"
          />
          <InputDate
            register={register}
            error={errors.toDate?.message}
            name="toDate"
            label="Até:"
          />
        </DateBox>

        <JustificationBox>
          <label>Justificativa: </label>
          <textarea {...register("justification")} />
          <span>{errors.justification?.message}</span>
        </JustificationBox>

        <FileBox>
          <label> Arquivo: </label>
          <input type="file" name="file" {...register("file")} />
          {errors.file?.message}
        </FileBox>

        <button type="submit">Enviar</button>
      </form>
    </Container>
  );
};
