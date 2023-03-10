import axios from "axios";

export const api = axios.create({
    baseURL: `http://localhost:8080`,
    headers: {
        'Content-Type': "application/json"
    }

});

export const getLocalAccessToken = () => {
    return localStorage.getItem("accessToken");
}

export const updateLocalAccessToken = (accessToken) => {
    localStorage.setItem("accessToken", accessToken);
}

