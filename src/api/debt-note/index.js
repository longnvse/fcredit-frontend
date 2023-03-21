import {api} from "../../axios";
import {getMe} from "../auth/user";

const BASE_URL = `api/v1/fcredit/debt-notes`;

export const getDebtNotes = (debtorId, params) => {
    return api.get(`${BASE_URL}/${debtorId}`, {params});
}

export const addDebtNote = (debtorId, data) => {
    return api.post(`${BASE_URL}/${debtorId}`, data, {params: {username: getMe().sub}})
}

export const getDebtNote = (id) => {
    return api.get(`${BASE_URL}/detail/${id}`)
}