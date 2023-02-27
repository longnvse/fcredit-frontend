import {api, getLocalAccessToken} from "./index";
import dayjs from "dayjs";
import qs from "qs";
import {message} from "antd";

const setupAxios = () => {

    api.interceptors.request.use(
        (config) => {
            const accessToken = getLocalAccessToken();

            config.headers["Authorization"] = `Bearer ${accessToken}`;

            config.paramsSerializer = (params) => qs.stringify(params, {
                serializeDate: (date) => dayjs(date).format("YYYY-MM-DD HH:mm:ss")
            });

            return config;

        },
        (error) => {
            return Promise.reject(error);
        }
    );

    api.interceptors.response.use(
        (res) => {

            return res;
        },
        async (err) => {

            const originalConfig = err.config;

            const response = err.response;

            const status = response?.status


            if (!originalConfig?.url?.includes("/api/v1/auth/login")) {
                // Access Token was expired
                if ((status === 401 || status === 403) && !originalConfig._retry) {
                    originalConfig._retry = true;
                    try {
                        // // const rs = await refreshToken();
                        // const {accessToken} = rs.data;
                        // updateLocalAccessToken(accessToken);
                        return api(originalConfig);
                    } catch (_error) {
                        return Promise.reject(_error);
                    }
                }
            }

            message.error(err.response?.data);

            return Promise.reject(err);
        }
    );
};

export default setupAxios;
