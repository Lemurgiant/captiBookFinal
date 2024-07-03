import styled from "styled-components";

interface PrimaryFrameUIProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: string;
  height?: string;
}

const PrimaryFrameUI = styled.div<PrimaryFrameUIProps>`
  background: ${({ theme }) => theme.dark};
  border-radius: 0.6rem;
  border: 1px solid ${({ theme }) => theme.blant};
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "100%"};
`;

export default PrimaryFrameUI;
