const BookInsightsContext = createContext<useBookInsightsProps>(
  useBookInsightsContextInit
);
export default function BookDetails() {
  const bookInsights = useBookInsights();

  return (
    <>
      <Stack
        direction="row"
        width="100%"
        justifyContent={"center"}
        gap="1.5rem"
      >
        <Stack alignItems={"center"} gap="0.4rem">
          <BookUI />
          <PrimaryButtonUI>Change Book</PrimaryButtonUI>
        </Stack>
        <PrimaryFrameUI width="80%">foubeisj</PrimaryFrameUI>
      </Stack>
      <Stack alignItems={"center"} gap="2rem">
        <InsightsBoardTabGroup
          tabVal={bookInsights.tabVal}
          handleTabVal={bookInsights.handleTabVal}
        />
        <BookInsightsContext.Provider value={bookInsights}>
          {bookInsights.tabVal === "summary" && (
            <InsightsBoard
              tooltipTitle="Add summary"
              quote="Learn to skim scan. Not all pages are worth turning, but every book has something to teach"
              author="-Malorie Blackman"
            />
          )}
          {bookInsights.tabVal === "terms" && (
            <InsightsBoard
              tooltipTitle="Add term"
              quote="The limits of my language mean the limits of my world"
              author="-Ludwig Wittgenstein"
            />
          )}
          {bookInsights.tabVal === "quotes" && (
            <InsightsBoard
              tooltipTitle="Add quote"
              quote="To quote is to think with another person's head"
              author="-Emile Chartier"
            />
          )}
          <AddSummaryModal
            isShowing={bookInsights.isAddingItemModalOpen("summary")}
            handleClose={bookInsights.handleAddItemModalClose}
            handleAddSummaryItem={bookInsights.handleAddSummaryItem}
          />
          <AddTermModal
            isShowing={bookInsights.isAddingItemModalOpen("terms")}
            handleClose={bookInsights.handleAddItemModalClose}
            handleAddTermItem={bookInsights.handleAddTermItem}
          />
          <AddQuoteModal
            isShowing={bookInsights.isAddingItemModalOpen("quotes")}
            handleClose={bookInsights.handleAddItemModalClose}
            handleAddQuoteItem={bookInsights.handleAddQuoteItem}
          />
          <ConfirmDeleteModal
            isShowing={bookInsights.isDeletingItemModalOpen}
            handleClose={bookInsights.handleDeleteItemModalClose}
            handleDelete={() =>
              bookInsights.handleDeleteItem(bookInsights.getSelectedItem()!.key)
            }
          />
        </BookInsightsContext.Provider>
      </Stack>
    </>
  );
}

export const useBookInsightsContext = () => useContext(BookInsightsContext);
