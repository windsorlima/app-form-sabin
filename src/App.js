import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./styles/global";
import { AppProvider } from "./hooks";
import { MyRoutes } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <MyRoutes />
      </AppProvider>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
