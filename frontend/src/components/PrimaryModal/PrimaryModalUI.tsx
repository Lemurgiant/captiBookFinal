import styled, { css, useTheme } from "styled-components";
import { SPRING } from "../../constants/constants";
import { CSSProperties } from "react";
import PrimaryTinyButtonUI from "../PrimaryTinyButtonUI";
import { IoCloseSharp } from "react-icons/io5";
import { Typography } from "@mui/material";
import { withTransition } from "../../animations/withTransition";

interface PrimaryModalUIonProps {
  width?: string;
  height?: string;
  style?: any;
}

const PrimaryModalUIon = styled.div<PrimaryModalUIonProps>`
  width: ${({ width }) => width || "40rem"};
  height: ${({ height }) => height || "30rem"};
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  background: ${({ theme }) => theme.dark};
  border: 2px solid ${({ theme }) => theme.neutral};
  border-radius: 1rem;
  box-shadow: 0px 0px 34px 3px rgba(0, 0, 0, 0.57);
  -webkit-box-shadow: 0px 0px 34px 3px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 0px 34px 3px rgba(0, 0, 0, 0.57);
  box-sizing: border-box;
  padding: 1.4rem 2rem;
  display: flex;
  z-index: 189;
  flex-direction: column;
  align-items: center;
  ${({ style }) => style && style};
`;

const PrimaryModalOverlayUI = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #00000081;
  opacity: 0.5;
`;

const AnimatedPrimaryModalUIon = withTransition(PrimaryModalUIon, SPRING.POP);
const AnimatedPrimaryModalOverlayUI = withTransition(
  PrimaryModalOverlayUI,
  SPRING.FADE
);

const closeButtonPositionStyles: CSSProperties = {
  position: "absolute",
  top: "1.2rem",
  right: "1.4rem",
};

interface PrimaryModalUIProps extends PrimaryModalUIonProps {
  handleClose?: () => void;
  isShowing: boolean;
  head: string;
  hasXButton?: boolean;
  children?: React.ReactNode;
  [key: string]: any;
}

export default function PrimaryModalUI({
  handleClose,
  isShowing,
  hasXButton = true,
  head,
  children,
  ...props
}: PrimaryModalUIProps) {
  const theme = useTheme();
  return (
    <>
      <AnimatedPrimaryModalOverlayUI isShowing={isShowing} />
      <AnimatedPrimaryModalUIon isShowing={isShowing} {...props}>
        {hasXButton && (
          <PrimaryTinyButtonUI
            onClick={handleClose}
            style={closeButtonPositionStyles}
            bgcolor={theme.error[100]}
            bgcolorActive={theme.error[300]}
          >
            <IoCloseSharp size={26} />
          </PrimaryTinyButtonUI>
        )}
        <Typography
          variant="inherit"
          fontSize={"26px"}
          fontWeight={"bold"}
          mb="1.3rem"
        >
          {head}
        </Typography>
        {children}
      </AnimatedPrimaryModalUIon>
    </>
  );
}
