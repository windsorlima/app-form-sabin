import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { futureFoulsSchema } from "./schema";
import {
  Container,
  DateBox,
  JustificationBox,
  FileBox,
  SuccessText,
  ErrorText,
} from "./styles";
import { InputDate } from "../InputDate";
import { useCallback, useState } from "react";
import { NextButton } from "../NextButton";
import { api } from "../../service/api";

export const FutureFoulsForm = ({ appData, navigate }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(futureFoulsSchema) });

  const [error, setError] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

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
        justification: "",
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
      try {
        setIsLoading(true);
        const prePayload = await makePayload(data);

        const payload = {
          activities: appData.activities,
          commonInfo: { ...prePayload },
        };

        const response = await api.post("/student/createFutureCall", {
          ...payload,
        });

        if (response.data.success) {
          setSuccess(true);
          setTimeout(() => {
            setIsLoading(false);
            navigate("/");
          }, 2000);
        }
      } catch (error) {
        setIsLoading(false);
        if (
          error.response.data.error.includes(
            "Cannot insert the value NULL into column 'IDHORARIOTURMA'"
          )
        ) {
          setError(
            "Data inicial ou final digitada não corresponde a um dia de aula dessa atividade."
          );
        }

        if (error.response.data.error.includes("Chave duplicada")) {
          setError(
            "Justificativa realizada anteriormente, procure a coordenação de esporte"
          );
        }
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
        <span>
          Favor digitar a data do primeiro e do último dia de falta do aluno
          nesta atividade
        </span>

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

        {/* <JustificationBox>
          <label>Justificativa: </label>
          <textarea {...register("justification")} />
          <span>{errors.justification?.message}</span>
        </JustificationBox> */}

        <FileBox>
          <label> Anexar atestado: </label>
          <input
            type="file"
            name="justificationFile"
            {...register("justificationFile")}
            accept="image/*, .pdf"
          />
          <span>{errors.justificationFile?.message}</span>
        </FileBox>

        <NextButton type="submit" isLoading={isLoading}>
          Enviar
        </NextButton>
      </form>
      {success && <SuccessText> Falta justificada com sucesso! </SuccessText>}
      {error && <ErrorText> {error} </ErrorText>}
    </Container>
  );
};
