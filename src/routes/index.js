import { Routes, Route } from "react-router-dom";
import { Students } from "../pages/Students";
import { RequestList } from "../pages/RequestList";

export const MyRoutes = () => (
  <Routes>
    <Route path="" exact element={<Students />} />
    <Route path="/student" exact element={<RequestList />} />
  </Routes>
);
