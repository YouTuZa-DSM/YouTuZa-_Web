import styled from "@emotion/styled";

const Text = styled.h1`
  line-height: 1.4;
  font-size: ${(props) => {
    switch (props.type) {
      case "small":
        return "1.6rem";
      case "normal":
        return "2.0rem";
      case "big":
        return "2.4rem";
    }
  }};
  font-weight: 800;
`;

function Title(props) {
  const { type, children } = props;

  return <Text type={type}>{children}</Text>;
}

export default Title;
