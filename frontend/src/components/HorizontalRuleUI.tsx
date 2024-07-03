import styled from "styled-components";

const HorizontalRuleUI = styled.hr`
  width: 95%;
  background: ${({ theme }) => theme.light};
  opacity: 0.5;
`;

export default HorizontalRuleUI;
