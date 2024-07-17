import React, { useState } from "react";
import {
  OrderBookTable,
  OrderBookTd,
  OrderBookTr,
  OrderBookWrapper,
} from "./AskingPrice.style";
import BuySellModal from "./BuySellModal";

function OrderBook({ name, priceList, currentPrice }) {
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleAmountClick = (price, actionType) => {
    setSelectedPrice(price);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedPrice(null);
  };

  const maxAmount = priceList
    ? Math.max(...priceList.map((item) => item.second)) + 30
    : 0;

  return (
    <OrderBookWrapper>
      <OrderBookTable>
        <tbody>
          {priceList &&
            priceList.map((item, index) => {
              const { first: price, second: amount } = item;
              const isLower = Number(price) < currentPrice;
              const intensity = (amount / maxAmount) * 100;
              const backgroundImage = !!isLower
                ? `linear-gradient(to left, rgba(255, 95, 26, 0.178) ${
                    100 - intensity
                  }%, #ffa286 ${100 - intensity}%)`
                : `linear-gradient(to right, rgba(171, 162, 255, 0.255) ${
                    100 - intensity
                  }%, #7492ff ${100 - intensity}%)`;

              return (
                <OrderBookTr key={index}>
                  {isLower ? (
                    <>
                      <OrderBookTd></OrderBookTd>
                      <OrderBookTd>{price}</OrderBookTd>
                      <OrderBookTd
                        style={{
                          textAlign: "left",
                          backgroundImage,
                          color: "#ff3c00",
                        }}
                        onClick={() => handleAmountClick(price)}
                      >
                        {amount}
                      </OrderBookTd>
                    </>
                  ) : (
                    <>
                      <OrderBookTd
                        style={{
                          textAlign: "right",
                          backgroundImage,
                          color: "#0037ff ",
                        }}
                        onClick={() => handleAmountClick(price)}
                      >
                        {amount}
                      </OrderBookTd>
                      <OrderBookTd>{price}</OrderBookTd>
                      <OrderBookTd></OrderBookTd>
                    </>
                  )}
                </OrderBookTr>
              );
            })}
        </tbody>
      </OrderBookTable>

      {modalVisible && (
        <BuySellModal
          name={name}
          price={selectedPrice}
          onClose={handleCloseModal}
        />
      )}
    </OrderBookWrapper>
  );
}

export default OrderBook;
