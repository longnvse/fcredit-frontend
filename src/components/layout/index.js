import React from 'react';
import {useSelector} from "react-redux";
import {LoadingOutlined} from "@ant-design/icons";
import {Layout, Spin} from "antd";
import {Outlet} from "react-router-dom";
import CommonHeader from "./header/Header";
import CommonContent from "./content/Content";
import CommonSider from "./sider/Sider";

const RootPage = props => {
    const {loading} = useSelector((state) => state.commonReducer);
    const antIcon = <LoadingOutlined style={{fontSize: 24}} spin/>;

    return (
        <Layout
            style={{
                minHeight: "100vh",
            }}
        >
            <CommonSider/>
            <Layout>
                <CommonHeader/>
                <CommonContent>
                    <Spin
                        style={{
                            height: "inherit",
                        }}
                        className={"loading"}
                        spinning={loading}
                        indicator={antIcon}
                    >
                        <Outlet/>
                    </Spin>
                </CommonContent>
            </Layout>
        </Layout>
    );

};

RootPage.propTypes = {};

export default RootPage;