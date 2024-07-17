import React, { useState } from "react";
import styled from "@emotion/styled";
import Modal from "./Modal";
import {
  useBuyYoutuberStock,
  useSellYoutuberStock,
} from "../../utils/api/Stock";

const ModalContainer = styled.div`
  background-color: white;
  padding: 20px;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

const ModalContent = styled.div`
  padding: 20px;
`;

const Button = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  cursor: pointer;
`;

const BuySellModal = ({ name, price, onClose }) => {
  const [amount, setAmount] = useState(0);
  const { mutate: buy } = useBuyYoutuberStock(name);
  const { mutate: sell } = useSellYoutuberStock(name);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleConfirm = (action) => {
    if (action === "buy")
      buy({ youtubeName: name, price, purchasesCount: amount });
    else sell({ youtubeName: name, price, purchasesCount: amount });
    onClose();
  };

  return (
    <Modal onClose={onClose}>
      <ModalContainer>
        <CloseButton onClick={onClose}>X</CloseButton>
        <ModalContent>
          <p>가격: {price}</p>
          <input
            type="number"
            placeholder="수량을 입력해주세요"
            value={amount}
            onChange={handleAmountChange}
          />
          <Button onClick={onClose}>취소</Button>
          <Button onClick={() => handleConfirm("buy")}>매수</Button>
          <Button onClick={() => handleConfirm("sell")}>매도</Button>
        </ModalContent>
      </ModalContainer>
    </Modal>
  );
};

export default BuySellModal;
