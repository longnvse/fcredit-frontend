import {api} from "../../axios";

const BASE_URL_VERIFY_USER = "api/v1/auth/verify-user";
export const verifyUser = (token) => {
    return api.post(BASE_URL_VERIFY_USER, {},{params:{token}});
}