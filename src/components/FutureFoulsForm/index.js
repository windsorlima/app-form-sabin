import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { futureFoulsSchema } from "./schema";
import { Container, DateBox, JustificationBox, FileBox } from "./styles";
import { InputDate } from "../InputDate";
import { useCallback } from "react";
import axios from "axios";

export const FutureFoulsForm = ({ appData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(futureFoulsSchema) });

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const makePayload = useCallback(
    async (data) => {
      const fileChangedToBase64 = await convertBase64(
        data.justificationFile[0]
      );

      const payload = {
        clientId: appData.selectedStudent.id,
        justification: data.justification,
        fromDate: data.fromDate,
        toDate: data.toDate,
        fileBase64: fileChangedToBase64,
      };

      return payload;
    },
    [appData.selectedStudent.id]
  );

  const makeRequest = useCallback(
    async (data) => {
      const prePayload = await makePayload(data);

      const payload = {
        activities: appData.activities,
        commonInfo: { ...prePayload },
      };

      await axios.post("http://localhost:3500/student/createFutureCall", {
        ...payload,
      });

      alert("Success");
    },
    [appData.activities, makePayload]
  );

  return (
    <Container>
      <form
        onSubmit={handleSubmit((data) => {
          makeRequest(data);
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
          <input
            type="file"
            name="justificationFile"
            {...register("justificationFile")}
          />
          {errors.file?.message}
        </FileBox>

        <button type="submit">Enviar</button>
      </form>
    </Container>
  );
};
