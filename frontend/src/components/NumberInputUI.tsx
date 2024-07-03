import * as React from "react";
import {
  Unstable_NumberInput as BaseNumberInput,
  NumberInputProps,
  numberInputClasses,
} from "@mui/base/Unstable_NumberInput";
import { styled } from "@mui/system";
import { useTheme } from "styled-components";
import InputBase from "@mui/material/InputBase";

const NumberInput = React.forwardRef(function CustomNumberInput(
  props: StyledNumberInputProps,
  ref: React.ForwardedRef<HTMLInputElement>
) {
  const {
    buttonBackground,
    buttonLogoColor,
    buttonBorderColor,
    buttonBackgroundHover,
    buttonLogoColorHover,
    buttonBorderColorHover,
    ...rest
  } = props;

  return (
    <BaseNumberInput
      slots={{
        root: StyledInputRoot,
        input: StyledInputElement,
        incrementButton: (incrementProps) => (
          <StyledButton
            {...incrementProps}
            buttonBackground={buttonBackground}
            buttonLogoColor={buttonLogoColor}
            buttonBorderColor={buttonBorderColor}
            buttonBackgroundHover={buttonBackgroundHover}
            buttonLogoColorHover={buttonLogoColorHover}
            buttonBorderColorHover={buttonBorderColorHover}
          />
        ),
        decrementButton: (decrementProps) => (
          <StyledButton
            {...decrementProps}
            buttonBackground={buttonBackground}
            buttonLogoColor={buttonLogoColor}
            buttonBorderColor={buttonBorderColor}
            buttonBackgroundHover={buttonBackgroundHover}
            buttonLogoColorHover={buttonLogoColorHover}
            buttonBorderColorHover={buttonBorderColorHover}
          />
        ),
      }}
      slotProps={{
        input: { ref },
        incrementButton: {
          children: "▴",
        },
        decrementButton: {
          children: "▾",
        },
      }}
      {...rest}
    />
  );
});

interface NumberInputBasicProps {
  value: number | null;
  setter: any;
  ref?: any;
  [key: string]: any;
}

const NumberInputBasic = React.forwardRef<
  HTMLDivElement,
  NumberInputBasicProps
>(({ value, setter, ...props }, ref) => {
  const theme = useTheme();
  return (
    <NumberInput
      aria-label="Demo number input"
      placeholder="Type a number…"
      value={value}
      onChange={(event, val) => setter(val)}
      onInputChange={(e) => setter(Number(e.target.value))}
      background={theme.bg.dark} // Background color
      borderColor={theme.blant} // Border color
      borderColorHover={theme.light} // Border color on hover
      borderColorFocused={theme.light} // Border color when focused
      boxShadowColorFocused={theme.primary[100]} // Box shadow color when focused
      color={theme.light}
      buttonBackground={theme.dark}
      buttonLogoColor={theme.light}
      buttonBorderColor={theme.blant}
      buttonBackgroundHover={theme.primary[100]}
      buttonLogoColorHover={theme.light}
      buttonBorderColorHover={theme.light}
      ref={ref}
      {...props}
    />
  );
});

export default NumberInputBasic;

interface StyledNumberInputProps extends NumberInputProps {
  background: string;
  borderColor: string;
  borderColorHover: string;
  borderColorFocused: string;
  boxShadowColorFocused: string;
  color: string;
  buttonBackground: string;
  buttonLogoColor: string;
  buttonBorderColor: string;
  buttonBackgroundHover: string;
  buttonLogoColorHover: string;
  buttonBorderColorHover: string;
}

interface StyledInputRootProps {
  background: string;
  borderColor: string;
  borderColorHover: string;
  borderColorFocused: string;
  boxShadowColorFocused: string;
}

const StyledInputRoot = styled("div")(
  ({
    background,
    borderColor,
    borderColorHover,
    borderColorFocused,
    boxShadowColorFocused,
  }: StyledInputRootProps) => `
  width: 10rem;
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 400;
  border-radius: 8px;
  background: ${background};
  border: 1px solid ${borderColor};
  display: grid;
  grid-template-columns: 1fr 19px;
  grid-template-rows: 1fr 1fr;
  overflow: hidden;
  column-gap: 8px;
  padding: 4px;

  &.${numberInputClasses.focused} {
    border-color: ${borderColorFocused};
    box-shadow: 0px 0px 0px 0.15rem ${boxShadowColorFocused};
  }

  &:hover {
    border-color: ${borderColorHover};
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`
);
interface StyledInputElementProps extends NumberInputProps {
  color: string;
}

const StyledInputElement = styled("input")(
  ({ color }: StyledInputElementProps) => `
  width: 80%;
  font-size: 0.875rem;
  font-family: inherit;
  font-weight: 400;
  line-height: 1.5;
  grid-column: 1/2;
  grid-row: 1/3;
  color: ${color};
  background: inherit;
  border: none;
  border-radius: inherit;
  padding: 8px 12px;
  outline: 0;
`
);

interface StyledButtonProps {
  buttonBackground: string;
  buttonLogoColor: string;
  buttonBorderColor: string;
  buttonBackgroundHover: string;
  buttonLogoColorHover: string;
  buttonBorderColorHover: string;
}

const StyledButton = styled("button")(
  ({
    buttonBackground,
    buttonLogoColor,
    buttonBorderColor,
    buttonBackgroundHover,
    buttonLogoColorHover,
    buttonBorderColorHover,
  }: StyledButtonProps) => `
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  appearance: none;
  padding: 0;
  width: 19px;
  height: 19px;
  font-family: system-ui, sans-serif;
  font-size: 0.875rem;
  line-height: 1;
  box-sizing: border-box;
  border: 0;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;

  &:hover {
    cursor: pointer;
  }

  &.${numberInputClasses.incrementButton} {
    grid-column: 2/3;
    grid-row: 1/2;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    border: 1px solid;
    border-bottom: 0;
    &:hover {
      cursor: pointer;
      background: ${buttonBackgroundHover};
      color: ${buttonLogoColorHover};
      border-color: ${buttonBorderColorHover};
    }

  border-color: ${buttonBorderColor};
  background: ${buttonBackground};
  color: ${buttonLogoColor};
  }

  &.${numberInputClasses.decrementButton} {
    grid-column: 2/3;
    grid-row: 2/3;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    border: 1px solid;
    &:hover {
      cursor: pointer;
      background: ${buttonBackgroundHover};
      color: ${buttonLogoColorHover};
      border-color: ${buttonBorderColorHover};
    }

    border-color: ${buttonBorderColor};
    background: ${buttonBackground};
    color: ${buttonLogoColor};
  }
  & .arrow {
    transform: translateY(-1px);
  }
`
);
