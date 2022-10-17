import { arrayOptions, foulsOptions } from "../constants/requestOptions";

export const getSolicitationObject = (selectedSolicitation) => {
  const solicitation = arrayOptions.find(
    (element) => element.value === selectedSolicitation
  );

  return solicitation;
};

export const getRequestChoiceObject = (selectedRequestChoice) => {
  const solicitation = foulsOptions.find(
    (element) => element.value === selectedRequestChoice
  );

  return solicitation;
};
