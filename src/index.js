import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ConfigProvider} from "antd";
import vi_VN from "antd/es/locale/vi_VN";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
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
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
