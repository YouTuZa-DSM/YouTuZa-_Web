import styled from "@emotion/styled";

const MyContainer = styled.div`
  height: 82vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const MyWrapper = styled.div``;

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
  font-size: 2rem;
  line-height: 1.4;
  font-weight: 500;
`;

const AuthButton = styled.button`
  width: 100%;
  height: 60px;
  border-radius: 10px;
  text-align: center;
  padding: 10px 15px;
  background-color: black;
  color: white;
`;

const AuthButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 4px;
`;

export {
  MyContainer,
  ProfileWrapper,
  Nickname,
  MyWrapper,
  AuthButton,
  AuthButtonWrapper,
};
