import jwtDecode from "jwt-decode";
import {api} from "../../axios";
import {logout} from "./login";

const BASE_URL = "/api/v1/fcredit/profile"
export const getMe = () => {
    try {
        const accessToken = localStorage.getItem("accessToken");
        console.log(jwtDecode(accessToken))
        return jwtDecode(accessToken);
    } catch (e) {
        logout();
    }
}

export const getProfile = () => {
    return api.get(`${BASE_URL}/${getMe().sub}`);
};

export const updateProfile = (data) => {
    return api.put(`${BASE_URL}/${getMe().sub}`, data);
};

export const changePassword = (data) => {
    return api.put(`${BASE_URL}/password/${getMe().sub}`, data);
};