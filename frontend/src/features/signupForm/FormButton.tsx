import React from "react";
import PrimaryButtonUI, {
  PrimaryButtonUIProps,
} from "../../components/PrimaryButtonUI";
import PrimarySpinner from "../../components/PrimarySpinner";
import { useTheme } from "styled-components";

interface FormButtonProps extends PrimaryButtonUIProps {
  isPending: boolean;
  label: string;
}

const FormButton: React.FC<FormButtonProps> = ({
  isPending,
  label,
  ...props
}) => {
  const theme = useTheme();
  return (
    <PrimaryButtonUI style={{ width: "100%" }} {...props}>
      {isPending ? (
        <PrimarySpinner size={"1rem"} bgcolor={theme.light} />
      ) : (
        label
      )}
    </PrimaryButtonUI>
  );
};

export default FormButton;
