import { useState } from "react";
import styled from "styled-components";
import BookUI from "../../components/BookUI";

const HoverableBookUIon = styled.div`
  width: fit-content;
  height: fit-content;
  position: relative;
`;

const HoverableBookOverlayUI = styled.div`
  background: #00000088;
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface HoverableBookUIProps {
  onHoverChildren?: React.ReactNode;
  bookImageURL: string | null;
}

export default function HoverableBook({
  onHoverChildren,
  bookImageURL,
}: HoverableBookUIProps) {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseOver = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  return (
    <HoverableBookUIon
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      {isHovered && (
        <HoverableBookOverlayUI>{onHoverChildren}</HoverableBookOverlayUI>
      )}
      <BookUI src={bookImageURL ?? undefined} />
    </HoverableBookUIon>
  );
}

export const BUTTON_SHADOWS = {
  boxShadow: "0px 0px 18px 0px rgba(0,0,0,0.75)",
  WebkitBoxShadow: "0px 0px 18px 0px rgba(0,0,0,0.75)",
  MozBoxShadow: "0px 0px 18px 0px rgba(0,0,0,0.75)",
};
