import React, {useEffect, useMemo, useState} from 'react';
import {Button, Modal} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {closeModal} from "../../../redux/actions/common/actions";
import {ADD, UPDATE} from "../Constant";

const ButtonModal = ({
                         children = React.createElement("div"),
                         title = "",
                         formId = undefined,
                         mode = "",
                         modalProps = {},
                         buttonProps = {},
                         button,
                         autoCLose = true
                     }) => {
    const [open, setOpen] = useState(false);
    const {isCloseModal} = useSelector(state => state.commonReducer);
    const dispatch = useDispatch();

    const onOpen = () => {
        setOpen(true);
    }

    const onClose = () => {
        setOpen(false);
    }

    useEffect(() => {
        return () => {
            dispatch(closeModal(false));
        };
    }, []);

    const buttonTitle = useMemo(() => {
        if (mode === ADD) {
            return <span>Thêm mới </span>;
        } else if (mode === UPDATE) {
            return <span>Cập nhật </span>;
        }

        return <></>;
    }, [mode]);

    useEffect(() => {
        if (autoCLose && isCloseModal) {
            onClose();
        }
    }, [isCloseModal]);


    return (<div>
        {!button ? <Button
            onClick={onOpen} {...buttonProps}>{buttonProps.value}</Button> : React.cloneElement(button, {onClick: onOpen})}
        <Modal
            open={open}
            title={title || ""}
            onCancel={onClose}
            okButtonProps={{htmlType: "submit", form: formId, type: "primary"}}
            okText={buttonTitle}
            destroyOnClose={true}
            {...modalProps}
        >
            {React.cloneElement(children)}
        </Modal>
    </div>);
};

ButtonModal.propTypes = {};

export default ButtonModal;
