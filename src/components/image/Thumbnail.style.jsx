import styled from "@emotion/styled";

const ThumbnailWrap = styled.div`
  box-shadow: 0 0 10px ${(props) => props.theme.colors.secondary.black};
  width: 50rem;
  height: 33rem;
  overflow: hidden;
  object-fit: cover;

  &:hover img {
    transform: ${(scale) => (scale ? "scale(1.1)" : "scale(1)")};
    opacity: 1;
    box-shadow: 0 0 10px ${(props) => props.theme.colors.secondary.black};
  }
`;

const ThumbnailImg = styled.img`
  display: block;
  position: relative;
  top: 0;
  left: 0;
  transition: all 0.5s;
  opacity: 0.8;
  z-index: 10;
  box-shadow: 0 0 10px ${(props) => props.theme.colors.secondary.black};
  width: 100%;
  object-fit: cover;
`;

export { ThumbnailWrap, ThumbnailImg };
