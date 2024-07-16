import styled from "@emotion/styled";
import React from "react";

const Text = styled.div`
  color: ${(props) => props.theme.colors.grayscale.gray_700};
  font-size: ${(props) => {
    switch (props.type) {
      case "small":
        return "1rem";
      case "normal":
        return "1.2rem";
      case "big":
        return "1.4rem";
    }
  }};
  font-weight: 500;
`;

function SubTitle(props) {
  const { type, children } = props;

  return <Text type={type}>{children}</Text>;
}

export default SubTitle;
