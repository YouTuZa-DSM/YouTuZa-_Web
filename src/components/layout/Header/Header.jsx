import { useState, useEffect } from "react";
import LeftButton from "./LeftButton";
import RightButton from "./RightButton";
import useScroll from "../../../hooks/useScroll";
import { HeaderWrap } from "./Header.style";

function Header({ left, right, title, color }) {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  const isScrolled = useScroll();

  const [isPainted, setIsPainted] = useState(false);

  useEffect(() => {
    if (color && !isScrolled) setIsPainted(true);
    else setIsPainted(false);
  }, [color, isScrolled]);

  return (
    <HeaderWrap color={isScrolled ? "FFFFFF" : color}>
      {!isSSR && (
        <>
          <LeftButton left={left} isPainted={isPainted} title={title} />
          <RightButton right={right} isPainted={isPainted} />
        </>
      )}
    </HeaderWrap>
  );
}

export default Header;
