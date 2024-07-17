import styled from "@emotion/styled/macro";

const Comment = ({ title, name, content }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <div>
        <Content>{content}</Content>
        <Name>{name}</Name>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  border-bottom: 1px solid ${(props) => props.theme.colors.grayscale.gray_200};

  > div {
    display: flex;
    justify-content: space-between;
  }
`;

const Title = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.grayscale.gray_900};
`;

const Content = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.grayscale.gray_800};
`;

const Name = styled.p`
  font-size: 12px;
  font-weight: 300;
  color: ${(props) => props.theme.colors.grayscale.gray_600};
`;

export default Comment;
