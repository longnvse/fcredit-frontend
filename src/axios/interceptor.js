import {api, getLocalAccessToken} from "./index";
import dayjs from "dayjs";
import qs from "qs";
import {message_error} from "../components/common/Constant";
import {closeModal, isReload, loadingFinish, loadingStart} from "../redux/actions/common/actions";

const setupAxios = (store) => {

    api.interceptors.request.use(
        (config) => {
            const accessToken = getLocalAccessToken();

            config.headers["Authorization"] = `Bearer ${accessToken}`;


            store.dispatch(loadingStart(config.url));

            config.paramsSerializer = (params) => qs.stringify(params, {
                serializeDate: (date) => dayjs(date).format("YYYY-MM-DD HH:mm:ss")
            });

            return config;

        },
        (error) => {
            store.dispatch(loadingFinish(error.config.url));

            return Promise.reject(error);
        }
    );

    api.interceptors.response.use(
        (res) => {
            store.dispatch(loadingFinish(res.config.url));
            if (res.config.method === "get") {
                store.dispatch(isReload(false));
            }

            switch (res.config.method) {
                case "put":
                case "post":
                case "patch":
                case "delete": {
                    store.dispatch(isReload(true));
                    store.dispatch(closeModal(new Boolean(true)));
                }
            }


            return res;
        },
        async (err) => {
            store.dispatch(loadingFinish(err.config.url));
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

            message_error(err);
            store.dispatch(closeModal(false));

            return Promise.reject(err);
        }
    );
};

export default setupAxios;
