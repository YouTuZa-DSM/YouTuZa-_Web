import styled from "@emotion/styled";

const OrderBookWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  position: relative;
  margin-top: 20px;
`;

const OrderBookTable = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const OrderBookTh = styled.th`
  background-color: white;
  color: black;
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
  font-size: 1.5rem;
`;

const OrderBookTd = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
  font-size: 1.5rem;
  height: 40px;
`;

const OrderBookTr = styled.tr`
  &:nth-of-type(even) {
    background-color: white;
  }

  &:hover {
    background-color: white;
  }
`;

export {
  OrderBookTable,
  OrderBookTd,
  OrderBookTh,
  OrderBookTr,
  OrderBookWrapper,
};
