import { Stack } from "@mui/material";
import { Bar } from "react-chartjs-2";
import styled from "styled-components";
import React from "react";
import { BarDatumState } from "../../interface";
import BarDatumMotion from "../../../animations/BarDatumMotion";
import LabelHead from "../../../components/LabelHead";

const ProductivityGraphWrapper = styled.div`
  background: ${({ theme }) => theme.dark};
  width: fit-content;
  border-radius: 0.6rem;
  border: 1px solid ${({ theme }) => theme.blant};
`;

const UserProgressContainer = styled(Stack)`
  width: 38.6rem;
  height: 24rem;
  box-sizing: border-box;
  padding: 1rem 2rem;
  gap: 1rem;
`;

const UserProgressGraph = styled.div`
  width: 35rem;
  height: 17.8rem;
  border: 1px solid grey;
  box-sizing: border-box;
  padding: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface ProductivityGraphUIProps {
  barDatum: BarDatumState;
  isLoading: boolean;
  children?: React.ReactNode;
  graphLabel: string;
  isEmpty: boolean;
}

const GraphInstance: React.FC<ProductivityGraphUIProps> = ({
  barDatum,
  isLoading,
  children,
  graphLabel,
  isEmpty,
}) => {
  const options = {};
  const isBarPresent = !isLoading && !isEmpty;

  return (
    <ProductivityGraphWrapper>
      <UserProgressContainer>
        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          <LabelHead>{graphLabel}</LabelHead>
          {children}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <UserProgressGraph>
            {isBarPresent ? (
              <Bar data={barDatum} options={options}></Bar>
            ) : (
              <BarDatumMotion motion={isLoading ? "LOADING" : "EMPTY"} />
            )}
          </UserProgressGraph>
        </div>
      </UserProgressContainer>
    </ProductivityGraphWrapper>
  );
};
export default GraphInstance;
