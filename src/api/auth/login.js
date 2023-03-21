import {api} from "../../axios";

const BASE_URL_REFRESH_TOKEN = `/api/v1/auth/refreshtoken`;
const BASE_URL_LOG_OUT = `/api/v1/auth/logout`;
const BASE_URL_LOGIN = `/api/v1/auth/login`;
export const login = ({username, password, captchaResponse}) => {
    return api.post(
        BASE_URL_LOGIN,
        {
            username,
            password,
            captchaResponse
        }
    );
};

export const logout = () => {
    localStorage.clear();
    api.post(BASE_URL_LOG_OUT).finally(() => {
        window.location.href = "login";
    });
}

