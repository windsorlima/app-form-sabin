import { Routes, Route } from "react-router-dom";
import { Students } from "../pages/Students";
import { RequestList } from "../pages/RequestList";
import { RequestChoice } from "../pages/RequestChoice";
import { Activities } from "../pages/Activities";

export const MyRoutes = () => (
  <Routes>
    <Route path="" exact element={<Students />} />
    <Route path="/student" exact element={<RequestList />} />
    <Route path="/request" exact element={<RequestChoice />} />
    <Route path="/activities" exact element={<Activities />} />
  </Routes>
);
