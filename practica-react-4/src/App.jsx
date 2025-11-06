import { Route, Routes } from "react-router";

import { AppRouter } from "./router/AppRouter";
export const App = () => {
  return (
    <Routes>
      <Route path="*" element={<AppRouter />} />
    </Routes>
  );
};
