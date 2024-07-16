import styled from "@emotion/styled";
import React from "react";
import { Link } from "react-router-dom";

function GoToRideButton(props) {
  const { content } = props;

  const onGoToRide = () => {};

  return (
    <Link href="/#realtime-chart" passHref>
      <Btn onClick={onGoToRide}>{content}</Btn>
    </Link>
  );
}

const Btn = styled.button`
  border-radius: 0.8rem;
  background-color: ${(props) => props.theme.colors.secondary.red};
  padding: 0 1.6rem;
  height: 3.6rem;
  color: ${(props) => props.theme.colors.basic.white};
  font-size: 1.6rem;
`;

export default GoToRideButton;
