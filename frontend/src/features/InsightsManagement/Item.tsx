import { Typography } from "@mui/material";
import styled, { useTheme } from "styled-components";
import PrimaryTinyButtonUI from "../../components/PrimaryTinyButtonUI";
import { DeleteIconUI } from "../../components/Icons";
import { ObjectId } from "mongodb";

interface ItemUIonProps {
  isSelected: boolean;
}

const ItemUIon = styled.div<ItemUIonProps>`
  padding: 0.4rem 1.4rem;
  font-size: 14px;
  overflow-wrap: break-word;
  text-align: start;
  background: ${({ theme, isSelected }) =>
    isSelected ? theme.mainGradient : theme.bg.dark};
  border-left: 6px solid
    ${({ theme, isSelected }) =>
      isSelected ? theme.primary[300] : "transparent"};
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:hover {
    background: ${({ theme, isSelected }) =>
      isSelected ? theme.mainGradient : theme.dark};
  }
  cursor: pointer;
`;

const Toolsection = styled.div``;

interface ItemUIProps {
  itemKey: ObjectId;
  reference: string;
  isSelected: boolean;
  handleDeleteItemModalOpen: () => void;
  handleItemClick: () => void;
  [key: string]: any;
}

export default function Item({
  itemKey,
  reference,
  isSelected,
  handleItemClick,
  handleDeleteItemModalOpen,
  ...props
}: ItemUIProps) {
  const theme = useTheme();
  return (
    <ItemUIon isSelected={isSelected} onClick={handleItemClick} {...props}>
      <Typography
        variant="inherit"
        fontSize={"14px"}
        width="24rem"
        sx={{
          overflowWrap: "break-word",
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: 5,
          textOverflow: "ellipsis",
          maxHeight: "7rem",
          overflow: "hidden",
          lineHeight: "20px",
          textAlign: "justify",
        }}
      >
        {reference}
      </Typography>
      <Toolsection>
        <PrimaryTinyButtonUI
          bgcolor={theme.error[100]}
          bgcolorActive={theme.error[200]}
          onClick={handleDeleteItemModalOpen}
        >
          <DeleteIconUI size={25} />
        </PrimaryTinyButtonUI>
      </Toolsection>
    </ItemUIon>
  );
}
