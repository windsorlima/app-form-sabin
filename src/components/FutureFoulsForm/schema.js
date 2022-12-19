import * as yup from "yup";
import { add } from "date-fns";

const tomorrow = add(new Date(), {
  days: 1,
});

tomorrow.setHours(0, 0, 0, 0);

export const futureFoulsSchema = yup.object().shape({
  fromDate: yup
    .date("Data inválida")
    .min(tomorrow, "A data inicial deve ser maior do que hoje")
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
    .max(100, "A justificativa pode ter no mínimo 100 caracteres")
    .typeError(),
});
