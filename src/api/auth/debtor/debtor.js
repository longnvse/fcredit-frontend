import { api } from "../../../axios";
export const getDebtList = (params) =>{
    return api.get("api/v1/fcredit/debtor", {params});
}