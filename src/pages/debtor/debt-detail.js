import React, { useState } from "react";
import { Button, Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import Tables from "./table_detail";
const DebtDetail = () => {
  const [isModalOpen, setIsModalOpen] = useState(null);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(null);
  };
  const handleCancel = () => {
    setIsModalOpen(null);
  };

  return (
    <>
      <Button
        type="primary"
        icon={<ExclamationCircleOutlined />}
        onClick={showModal}
      >
        Chi tiết
      </Button>
      <Modal
        width="60%"
        title="Debt detail"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        closable={true}
      >
        <Tables />
      </Modal>
    </>
  );
};

export default DebtDetail;
