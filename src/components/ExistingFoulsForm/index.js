import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { NextButton } from "../NextButton";
import { existingFoulsSchema } from "./schema";
import {
  Container,
  SelectedFouls,
  JustificationBox,
  FileBox,
  ButtonRow,
} from "./styles";
import { useCallback, useState } from "react";
import axios from "axios";
import { BackButton } from "../BackButton";
import { Loading } from "../Loading";

export const ExistingFoulsForm = ({ appData, navigate }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm({ resolver: yupResolver(existingFoulsSchema) });

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
        fouls: appData.fouls,
        commonInfo: { ...prePayload },
      };

      const response = await axios.post(
        "https://portal.albertsabin.com.br:8095/student/createCall",
        {
          ...payload,
        }
      );

      setIsLoading(false);

      if (response.data.success) {
        navigate("/");
      }
    },
    [appData.fouls, makePayload, navigate]
  );

  return (
    <Container>
      <SelectedFouls> </SelectedFouls>
      <form
        onSubmit={handleSubmit((data) => {
          makeRequest(data);
        })}
      >
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

        {console.log(getValues())}

        <NextButton type="submit" isLoading={isLoading}>
          Enviar
        </NextButton>
      </form>
    </Container>
  );
};
