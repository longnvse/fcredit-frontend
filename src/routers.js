import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DebtDetail from "./pages/debtor/debt-detail";
import Login from "./pages/login";
import Register from "./pages/register";
import VerifyUser from "./pages/verify-user";


const Routers = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/detail"} element={<DebtDetail />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/register"} element={<Register />} />
        <Route path={"/verify-user"} element={<VerifyUser />} />
      </Routes>
    </BrowserRouter>
  );
};

Routers.propTypes = {};

export default Routers;
