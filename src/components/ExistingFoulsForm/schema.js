import * as yup from "yup";
import { add } from "date-fns";

const tomorrow = add(new Date(), {
  days: 1,
});

tomorrow.setHours(0, 0, 0, 0);

export const existingFoulsSchema = yup.object().shape({
  justification: yup
    .string()
    .typeError(),
});
