import styled from "styled-components";
import DividerUI from "../../../components/DividerUI";

const BookDetailsSectionRowWrapper = styled.div`
  display: flex;
  height: auto;
  width: 100%;
  align-items: center;
  padding: 0.3rem 1rem;
  box-sizing: border-box;
  font-size: 15px;
`;

const CategoryCell = styled.div`
  min-width: 10rem;
  height: 100%;
  display: flex;
  box-sizing: border-box;
  padding-right: 2rem;
  align-items: center;
  justify-content: flex-end;
`;

const DetailsCell = styled.div`
  padding-left: 2rem;
  box-sizing: border-box;
`;

interface BookDetailsSectionRowProps {
  category: string;
  details: string;
}

const BookDetailsSectionRow: React.FC<BookDetailsSectionRowProps> = ({
  category,
  details,
}) => (
  <>
    <BookDetailsSectionRowWrapper>
      <CategoryCell>{category}:</CategoryCell>
      <DividerUI flexItem orientation="vertical" />
      <DetailsCell>{details}</DetailsCell>
    </BookDetailsSectionRowWrapper>
    <DividerUI flexItem />
  </>
);

export default BookDetailsSectionRow;
