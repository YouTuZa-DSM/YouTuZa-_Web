import { DEFAULT_IMG } from "@constants/icon-constants";
import { ThumbnailImg, ThumbnailWrap } from "./Thumbnail.style";

function Thumbnail(props) {
  const { category, scale, src, alt } = props;
  return (
    <>
      <ThumbnailWrap scale={scale}>
        <ThumbnailImg
          width={category === "main" ? 550 : 550}
          height={category === "main" ? 400 : 400}
          src={src}
          alt={alt}
          objectFit={scale ? "cover" : "contain"}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = DEFAULT_IMG.THUMBNAIL;
          }}
        />
      </ThumbnailWrap>
    </>
  );
}

export default Thumbnail;
