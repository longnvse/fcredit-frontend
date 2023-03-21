import React, {useEffect} from 'react';
import {BrowserRouter, Route, Routes, useNavigate} from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import VerifyUser from "./pages/verify-user";
import {URIS} from "./uris";
import RootPage from "./components/layout";
import Dashboard from "./pages/dashboard";
import Debt from "./pages/debt";

const Routers = (props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={URIS.HOME} element={<Redirect to={URIS.DASHBOARD}/>}/>
                <Route path={URIS.LOGIN} element={<Login/>}/>
                <Route path={URIS.REGISTER} element={<Register/>}/>
                <Route path={URIS.VERIFY_USER} element={<VerifyUser/>}/>
                <Route
                    element={
                        <RootPage/>
                    }
                >
                    <Route path={URIS.DASHBOARD} element={<Dashboard/>}/>
                    <Route path={URIS.DEBT} element={<Debt/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

function Redirect({to}) {
    let navigate = useNavigate();
    useEffect(() => {
        navigate(to);
    });
    return null;
}

Routers.propTypes = {};

export default Routers;