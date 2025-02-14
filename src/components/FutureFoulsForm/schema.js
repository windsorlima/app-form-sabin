import * as yup from "yup";

const today = new Date();

today.setHours(0, 0, 0, 0);

const MAX_FILE_SIZE = 5 * 1024 * 1024;

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
  // justification: yup.string().typeError(),
  justificationFile: yup
    .mixed()
    .test("required", "O atestado é obrigatório", (value) => {
      return value && value.length;
    })
    .test(
      "fileSize",
      `O arquivo deve ser menor que ${MAX_FILE_SIZE / (1024 * 1024)} MB`,
      (value) => {
        if (value && value[0]) {
          return value[0].size <= MAX_FILE_SIZE;
        }
        return true;
      }
    ),
});
