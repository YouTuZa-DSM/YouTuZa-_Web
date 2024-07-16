import React from "react";

import {
  ProfileImgWrap,
  ProfileImg,
} from "@components/image/ProfileImage.style";

function ProfileImage({ src, width, height }) {
  return (
    <ProfileImgWrap width={width} height={height}>
      <ProfileImg src={src} width={width} height={height} alt="profile" />
    </ProfileImgWrap>
  );
}

export default ProfileImage;
