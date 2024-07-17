import styled from "@emotion/styled";

const MyContainer = styled.div``;

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 3rem;
  margin-top: 30px;
  padding: 0 30px 15px;
`;

const Nickname = styled.h1`
  font-size: 3rem;
  line-height: 1.4;
  font-weight: 500;
`;

export { MyContainer, ProfileWrapper, Nickname };
