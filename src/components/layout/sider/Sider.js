import React, {useMemo, useState} from 'react';
import {Image, Menu} from "antd";
import logo from "../../../assets/logo.png";
import Sider from "antd/es/layout/Sider";
import {Link, useNavigate} from "react-router-dom";
import {URIS} from "../../../uris";
import {AccountBookOutlined} from "@ant-design/icons";

function CommonSider({children}) {
    const [collapsed, setCollapsed] = useState(false);
    let navigate = useNavigate();
    const getDefaultOpenKeys = useMemo(() => window.location.pathname.split("/").filter(value => {
        if (!value) {
            return false;
        }

        if (!Number(value)) {
            return true;
        }
    }), []);

    const getDefaultSelectedKeys = useMemo(() => {
        return window.location.pathname.split("/").filter(value => {
            if (!value) {
                return false;
            }

            if (!Number(value)) {
                return true;
            }
        }).join("-");
    }, [])

    const items = [
        // {
        //     key: "dashboard",
        //     icon: <WindowsOutlined/>,
        //     label: <Link to={URIS.DASHBOARD}>Dashboard</Link>
        // },
        {
            key: "debt",
            icon: <AccountBookOutlined/>,
            label: <Link to={URIS.DEBT}>Sổ ghi nợ</Link>
        }
    ]

    return (
        <Sider
            width={250}
            theme={"light"}
            collapsible
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
        >
            <div
                onClick={(e) => {
                    navigate(URIS.DASHBOARD);
                }}
                style={{
                    margin: 8,
                    maxHeight: 64
                }} className={"flex items-center justify-center hover:cursor-pointer"}>
                <Image
                    src={logo}
                    alt={"logo"}
                    className={"app__header--logo"}
                    preview={false}
                />
            </div>
            <div>
                {children}
                <Menu
                    mode="inline"
                    items={items}
                    style={{
                        backgroundColor: 'inherit'
                    }}
                    defaultOpenKeys={getDefaultOpenKeys}
                    defaultSelectedKeys={[...getDefaultOpenKeys, getDefaultSelectedKeys]}
                />
            </div>
        </Sider>
    );
}

export default CommonSider;