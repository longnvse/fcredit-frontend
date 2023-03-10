import {api} from "../../axios";

const BASE_URL_REGISTER = `/api/v1/auth/register`;

export const registerUser = (registerRequest) => {
    return api.post(
        BASE_URL_REGISTER,
        registerRequest);
}