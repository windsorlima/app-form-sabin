import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { futureFoulsSchema } from "./schema";
import { Container, DateBox, JustificationBox, FileBox } from "./styles";
import { InputDate } from "../InputDate";
import { useCallback, useState } from "react";
import axios from "axios";
import { NextButton } from "../NextButton";
import { api } from "../../service/api";

export const FutureFoulsForm = ({ appData, navigate }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(futureFoulsSchema) });

  const [isLoading, setIsLoading] = useState(false);

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
      let fileChangedToBase64;

      if (data.justificationFile[0]) {
        fileChangedToBase64 = await convertBase64(data.justificationFile[0]);
      }

      const payload = {
        clientId: appData.selectedStudent.id,
        justification: data.justification,
        fromDate: data.fromDate,
        toDate: data.toDate,
        fileName: fileChangedToBase64 ? data.justificationFile[0].name : "",
        fileBase64: fileChangedToBase64 ? fileChangedToBase64 : "",
      };

      return payload;
    },
    [appData.selectedStudent.id]
  );

  const makeRequest = useCallback(
    async (data) => {
      setIsLoading(true);
      const prePayload = await makePayload(data);

      const payload = {
        activities: appData.activities,
        commonInfo: { ...prePayload },
      };

      const response = await api.post("/student/createFutureCall", {
        ...payload,
      });

      setIsLoading(false);
      if (response.data.success) {
        navigate("/");
      }
    },
    [appData.activities, makePayload, navigate]
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
          {errors.justificationFile?.message}
        </FileBox>

        <NextButton type="submit" isLoading={isLoading}>
          Enviar
        </NextButton>
      </form>
    </Container>
  );
};
