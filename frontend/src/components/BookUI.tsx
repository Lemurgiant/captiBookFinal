import React from "react";
import styled from "styled-components";
import { MdQuestionMark } from "react-icons/md";

interface BookUIProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  size?: string;
  src?: string;
}

const BookUIon = styled.div<{ size: string }>`
  width: ${(props) => props.size};
  height: calc(${(props) => props.size} * 1.5); /* Maintain the aspect ratio */
  border-radius: 0.2rem;
  overflow: hidden;
  background: #6e6e6e;
  display: flex;
  align-items: center;
  justify-content: center;
`;

BookUIon.defaultProps = {
  size: "7rem",
};

const BookImgUI = styled.img<{ size: string }>`
  width: 100%;
  height: 100%;
  background-color: grey;
`;

const BookUI: React.FC<BookUIProps> = ({ size = "7rem", src, ...props }) => {
  return (
    <BookUIon size={size}>
      {src ? (
        <BookImgUI size={size} src={src} {...props} />
      ) : (
        <MdQuestionMark size={35} />
      )}
    </BookUIon>
  );
};

export default BookUI;
