import { AppControlProvider } from "./app";

export const AppProvider = ({ children }) => {
  return <AppControlProvider>{children}</AppControlProvider>;
};
