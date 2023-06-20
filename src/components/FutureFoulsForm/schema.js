import * as yup from "yup";

const today = new Date();

today.setHours(0, 0, 0, 0);

export const futureFoulsSchema = yup.object().shape({
  fromDate: yup
    .date("Data inválida")
    .min(today, "A data inicial deve ser maior ou igual a hoje")
    .required()
    .typeError("A data inicial é obrigatória"),
  toDate: yup
    .date()
    .min(
      yup.ref("fromDate"),
      "A data final deve ser maior ou igual a data inicial"
    )
    .required()
    .typeError("A data final é obrigatória"),
  justification: yup
    .string()
    .required("A justificativa é obrigatória")
    .min(10, "A justificativa precisa ter no mínimo 10 caracteres")
    .max(100, "A justificativa pode ter no máximo 100 caracteres")
    .typeError(),
  justificationFile: yup
    .mixed()
    .test("required", "O atestado é obrigatório", (value) => {
      return value && value.length;
    }),
});
