import styled from "@emotion/styled";

const ProfileImgWrap = styled.div`
  position: relative;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

const ProfileImg = styled.img`
  border-radius: 50%;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  object-fit: cover;
`;

export { ProfileImgWrap, ProfileImg };
