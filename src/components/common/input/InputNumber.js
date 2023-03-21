import {InputNumber} from "antd";
import React from "react";
import {to_vietnamese} from "../num-to-text";

const InputNumberCustom = (props) => {
    return (
        <>
            <InputNumber
                formatter={(value) =>
                    `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }
                parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
                onChange={props.onChange}
                min={0}
                step={1000000}
                rootClassName={"w-full"}
                {...props}
            />
            <>{to_vietnamese(props.value || 0)}</>
        </>
    );
};

export default InputNumberCustom;
