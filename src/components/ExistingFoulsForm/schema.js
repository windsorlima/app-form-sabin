import * as yup from "yup";
import { add } from "date-fns";

const tomorrow = add(new Date(), {
  days: 1,
});

tomorrow.setHours(0, 0, 0, 0);

export const existingFoulsSchema = yup.object().shape({
  justification: yup
    .string()
    .required("A justificativa é obrigatória")
    .min(10, "A justificativa precisa ter no mínimo 10 caracteres")
    .max(100, "A justificativa pode ter no mínimo 100 caracteres")
    .typeError(),
  file: yup.mixed().required("O arquivo é obrigatório"),
});
