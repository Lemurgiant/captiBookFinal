import { DefaultTheme, useTheme } from "styled-components";
import PrimaryTinyButtonUI from "../../../components/PrimaryTinyButtonUI";
import HoverableBook, { BUTTON_SHADOWS } from "../../pure/HoverableBook";
import { CheckMarkIconUI, PlusIconUI } from "../../../components/Icons";
import { Tooltip } from "@mui/material";
import { SearchedBookProps } from "./interfaces";

const renderAlreadyAddedButton = (theme: DefaultTheme) => (
  <PrimaryTinyButtonUI
    bgcolor={theme.success[100]}
    bgcolorActive={theme.success[100]}
    style={BUTTON_SHADOWS}
  >
    <CheckMarkIconUI size={22} />
  </PrimaryTinyButtonUI>
);

const renderAddToCollectionButton = (
  theme: DefaultTheme,
  onClick: () => void
) => (
  <PrimaryTinyButtonUI
    onClick={onClick}
    bgcolor={theme.primary[100]}
    bgcolorActive={theme.primary[300]}
    style={BUTTON_SHADOWS}
  >
    <PlusIconUI size={22} fill={theme.light} />
  </PrimaryTinyButtonUI>
);

export default function SearchedBook({
  book,
  isAlreadyCollected,
  addBookToCollectionMutate,
}: SearchedBookProps) {
  const theme = useTheme();

  return (
    <HoverableBook
      onHoverChildren={
        isAlreadyCollected ? (
          <>{renderAlreadyAddedButton(theme)}</>
        ) : (
          <Tooltip title="Add to Collection">
            {renderAddToCollectionButton(theme, () =>
              addBookToCollectionMutate(book)
            )}
          </Tooltip>
        )
      }
      bookImageURL={book.imageURL}
    />
  );
}
