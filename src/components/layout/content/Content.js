import React from 'react';
import {Layout} from "antd";

const {Content} = Layout

function CommonContent({children}) {
    return (
        <Content
            className={"app__content"}
            id={"content"}
        >
            {children}
        </Content>
    );
}

export default CommonContent;