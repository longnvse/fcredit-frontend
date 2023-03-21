import React, {useEffect, useState} from "react";
import {Avatar, Button, Dropdown, Space} from "antd";
import {KeyOutlined, LogoutOutlined, UserOutlined} from "@ant-design/icons";
import {VscAccount} from "react-icons/vsc";
import {getProfile} from "../../../../api/auth/user";
import {logout} from "../../../../api/auth/login";
import ButtonModal from "../../../common/button/ButtonModal";
import ProfileForm from "./form";
import {UPDATE} from "../../../common/Constant";
import ChangePasswordForm from "./change-password-form";


const ProfileIcon = (props) => {
    // const {avatar} = useSelector(state => state.commonReducer);
    const [profile, setProfile] = useState({});

    useEffect(() => {
        getProfile().then(res => {
            console.log(res);
            setProfile(res.data);
        })
    }, []);

    const handleOnLogout = () => {
        logout();
    };

    const menuItems = [
        {
            label: (
                <>
                    <Space>
                        <Avatar
                            size={"large"}
                            style={{
                                verticalAlign: "middle",
                            }}
                            icon={<UserOutlined/>}
                            // src={avatar}
                        />
                        {profile.fullName || profile.username || ""}
                    </Space>
                </>
            ),
            key: "/avatar",
        },
        {
            label: <ButtonModal
                mode={UPDATE}
                title={"Thông tin cá nhân"}
                formId={"profile-form"}
                buttonProps={{
                    value: "Thông tin người dùng",
                    type: "link",
                    className: "text-black"
                }}
                modalProps={{
                    width: "40%"
                }}
            >
                <ProfileForm/>
            </ButtonModal>,
            key: "account-info",
            icon: <VscAccount/>,
        },
        {
            label: <ButtonModal
                mode={UPDATE}
                title={"Đổi mật khẩu"}
                formId={"change-password-form"}
                buttonProps={{
                    value: "Đổi mật khẩu",
                    type: "link",
                    className: "text-black"
                }}
                modalProps={{
                    width: "40%",
                    okText: "Đổi mật khẩu"
                }}
            >
                <ChangePasswordForm/>
            </ButtonModal>,
            key: "/change-password",
            icon: <KeyOutlined/>,
        },
        {
            label: <Button type={"link"} className={"text-black"}>Đăng xuất</Button>,
            key: "/logout",
            icon: <LogoutOutlined/>,
            style: {
                borderTop: "1px solid #ccc",
            },
            onClick: handleOnLogout,
        },
    ];


    return (
        <>
            <Dropdown
                menu={{
                    items: menuItems
                }}
                trigger={["click"]}
                placement={"bottomRight"}
            >
                <div className={"cursor-pointer float-right app__header--item"}>
                    <Avatar
                        size={"default"}
                        icon={<UserOutlined/>}
                        // src={avatar}
                    />
                </div>
            </Dropdown>
        </>
    );
};

ProfileIcon.propTypes = {};

export default ProfileIcon;
