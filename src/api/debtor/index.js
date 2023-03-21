import {api} from "../../axios";
import {getMe} from "../auth/user";

const BASE_URL = `/api/v1/fcredit/debtors`;

export const getDebtors = (params) => {
    return api.get(BASE_URL, {params});
}

export const addDebtor = (data) => {
    return api.post(BASE_URL, data, {params: {username: getMe().sub}})
}

export const updateDebtor = (id, data) => {
    return api.put(`${BASE_URL}/${id}`, data)
}

export const getDebtor = (id) => {
    return api.get(`${BASE_URL}/${id}`)
}