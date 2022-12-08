import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { existingFoulsSchema } from "./schema";
import { Container, SelectedFouls, JustificationBox, FileBox } from "./styles";
import { useCallback } from "react";
import axios from "axios";

export const ExistingFoulsForm = ({ appData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(existingFoulsSchema) });

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
        fileName: data.justificationFile[0].name,
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
        fouls: appData.fouls,
        commonInfo: { ...prePayload },
      };

      await axios.post("http://localhost:3500/student/createCall", {
        ...payload,
      });

      alert("Success");
    },
    [appData.fouls, makePayload]
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
          {errors.file?.message}
        </FileBox>

        <button type="submit">Enviar</button>
      </form>
    </Container>
  );
};
