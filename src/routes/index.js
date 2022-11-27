import { Routes, Route } from "react-router-dom";
import { Students } from "../pages/Students";
import { RequestList } from "../pages/RequestList";
import { RequestChoice } from "../pages/RequestChoice";
import { ExistingFouls } from "../pages/ExistingFouls";
import { Activities } from "../pages/Activities";
import { FormPage } from "../pages/FormPage";

export const MyRoutes = () => (
  <Routes>
    <Route path="" exact element={<Students />} />
    <Route path="/student" exact element={<RequestList />} />
    <Route path="/request" exact element={<RequestChoice />} />
    <Route path="/existingFouls" exact element={<ExistingFouls />} />
    <Route path="/activities" exact element={<Activities />} />
    <Route path="/form" exact element={<FormPage />} />
  </Routes>
);
