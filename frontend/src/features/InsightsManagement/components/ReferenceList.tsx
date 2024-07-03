import {
  QuoteItem,
  SummaryItem,
  TermItem,
} from "../../../interfaces/globalState";
import Item from "../Item";
import DividerUI from "../../../components/DividerUI";
import { useInsightsManagementContext } from "../InsightsManagementInstance";
import { isEmptyString } from "../../helper";

interface ReferenceListPureProps {
  InsightItemCollection: SummaryItem[] | TermItem[] | QuoteItem[];
}

const ReferenceListPure: React.FC<ReferenceListPureProps> = ({
  InsightItemCollection,
}) => {
  const parseReferenceTitle = (
    item: SummaryItem | TermItem | QuoteItem
  ): string => {
    if ("reference" in item) {
      if (isEmptyString(item.reference)) {
        return "Untitled";
      } else {
        return item.reference!;
      }
    } else if ("term" in item) {
      return item.term;
    } else {
      return "";
    }
  };
  const {
    selectedItemId,
    handleSelectItemId,
    deleteItemModalState,
  } = useInsightsManagementContext();
  return (
    <>
      {InsightItemCollection.map((item) => (
        <>
          <Item
            isSelected={item._id === selectedItemId}
            handleItemClick={() => handleSelectItemId(item._id)}
            itemKey={item._id}
            reference={parseReferenceTitle(item)}
            handleDeleteItemModalOpen={deleteItemModalState.handleOpen}
          />
          <DividerUI flexItem />
        </>
      ))}
    </>
  );
};

const ReferenceList: React.FC = () => {
  const { itemCollection } = useInsightsManagementContext();
  return <ReferenceListPure InsightItemCollection={itemCollection} />;
};

export default ReferenceList;
