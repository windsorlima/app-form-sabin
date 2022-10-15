import { createContext, useContext, useState } from "react";
import { defaultInitialValues } from "../store/app";

const AppContext = createContext({});

export const AppControlProvider = ({ children }) => {
  const [appData, setAppData] = useState(defaultInitialValues);

  return (
    <AppContext.Provider value={{ appData, setAppData }}>
      {children}
    </AppContext.Provider>
  );
};

export const useControlApp = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useControlApp must be used within a AppProvider");
  }

  return context;
};
