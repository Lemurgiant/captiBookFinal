import { useTheme } from "styled-components";
import PrimaryButtonUI from "../../../components/PrimaryButtonUI";
import PrimarySpinner from "../../../components/PrimarySpinner";
interface PrimaryButtonUIWithPendingProps {
  isPending: boolean;
  onClick: () => void;
  [key: string]: any;
}

const RecordButton = ({
  isPending,
  onClick,
  props,
}: PrimaryButtonUIWithPendingProps) => {
  const theme = useTheme();

  return (
    <PrimaryButtonUI
      onClick={isPending ? () => null : onClick}
      isDisabled={isPending}
      {...props}
    >
      {isPending ? (
        <PrimarySpinner
          spinColor={theme.light}
          bgcolor={theme.primary[200]}
          size="1rem"
        />
      ) : (
        "RECORD"
      )}
    </PrimaryButtonUI>
  );
};

export default RecordButton;
