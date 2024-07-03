import styled from "styled-components";
import PrimaryFrameUI from "../../components/PrimaryFrameUI";
const FormWrapper = styled(PrimaryFrameUI)`
  width: 24rem;
  background: ${({ theme }) => theme.dark};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  padding-bottom: 3rem;
  font-size: 24px;
  font-weight: 600;
  box-sizing: border-box;
  transition: all 0.4s ease;
`;

export default FormWrapper;
