import styled from "styled-components";
import PrimaryFrameUI from "../../../components/PrimaryFrameUI";

const GlowableFrame = styled(PrimaryFrameUI)<{ isGlowing: boolean }>`
  border: ${({ isGlowing, theme }) =>
    isGlowing ? `3px solid ${theme.primary[200]}` : `1px solid ${theme.blant}`};
`;

export default GlowableFrame;
