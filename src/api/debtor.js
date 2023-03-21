import { api } from "../axios"

export const addDebtor = (data) => {
    return api.post('/api/v1/fcredit/debtors', { data })
}