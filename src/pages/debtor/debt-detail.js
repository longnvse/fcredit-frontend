import React, { useState } from "react";
import { Button, Modal } from "antd";

import Tables from "./table_detail";
const DebtDetail = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Chi tiết
      </Button>
      <Modal
        width="60%"
        title="Debt detail"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Tables />
      </Modal>
    </>
  );
};

export default DebtDetail;
