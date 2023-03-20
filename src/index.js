import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ConfigProvider} from "antd";
import vi_VN from "antd/es/locale/vi_VN";
import setupAxios from "./axios/interceptor";
import {persistor, store} from "./redux/store/store";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <ConfigProvider
                locale={vi_VN}
                theme={{
                    token: {
                        colorPrimary: "#DF5173",
                        colorLink: "#DF5173FF",
                        colorLinkHover: "rgba(223,81,115,0.8)"
                    }
                }}
            >
                <App/>
            </ConfigProvider>
        </PersistGate>
    </Provider>
);

setupAxios();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
