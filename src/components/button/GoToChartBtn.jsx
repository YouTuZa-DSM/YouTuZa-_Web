import styled from "@emotion/styled";
import React from "react";
import { Link } from "react-router-dom";

function GoToChartBtn() {
  return (
    <Link to="/chart">
      <Btn>모두 보기</Btn>
    </Link>
  );
}

const Btn = styled.button`
  border-radius: 0.8rem;
  padding: 0 1.6rem;
  height: 3.6rem;
  color: ${(props) => props.theme.colors.grayscale.gray_800};
  font-size: 1.125rem;
`;

export default GoToChartBtn;
