import styled from "@emotion/styled";

const HeaderWrap = styled.header`
  display: flex;
  position: sticky;
  top: 0;
  align-items: center;
  z-index: 100;
  margin: 0 0 0 -2.4rem;
  background-color: ${(props) =>
    props.color ? `#${props.color}` : props.theme.colors.basic.white};
  padding: 0 2.4rem;
  width: calc(100% + 4.8rem);
  height: 5.6rem;
`;

const Title = styled.div`
  font-size: 3rem;
  font-weight: 600;
  width: max-content;
`;

export { HeaderWrap, Title };
