import { Stack, Typography } from "@mui/material";
import React, { createContext, useContext, useState } from "react";
import styled, { useTheme } from "styled-components";
import ProfilePictureEditable from "./components/ProfilePictureEditable";
import PrimaryTextField from "../../components/PrimaryTextFieldUI";
import PrimaryButtonUI from "../../components/PrimaryButtonUI";
import useAuthApi from "../../hooks/queries/useAuthApi";
import AccountSettings from "./components/AccountSettings";
import useSettings, {
  useSettingsContextInit,
  useSettingsProps,
} from "./useSettings";
import DividerUI from "../../components/DividerUI";

const ColorDiv = styled.div<{ bgcolor: string }>`
  height: 2rem;
  width: 2rem;
  border-radius: 1rem;
  background-color: ${({ bgcolor }) => bgcolor};
`;

interface ColorDivSetProps extends React.HTMLAttributes<HTMLDivElement> {
  isSelected: boolean;
  primary: string;
  blant: string;
  dark: string;
}

const ColorDivSetWrapper = styled.div<{ isSelected: boolean }>`
  display: flex;
  flex-direction: row;
  gap: 1.2rem;
  background: ${({ theme }) => theme.mainGradient};
  box-shadow: ${({ isSelected, theme }) =>
    isSelected && `0px 0px 0px 3px ${theme.primary[100]}`};
  justify-content: space-between;
  align-items: center;
  padding: 0.6rem 1rem;
  height: fit-content;
  border-radius: 3rem;
  cursor: pointer;
  &:hover {
    box-shadow: ${({ isSelected, theme }) =>
      !isSelected && `0px 0px 0px 1px ${theme.primary[100]}`};
  }
`;

const ColorDivSet: React.FC<ColorDivSetProps> = ({
  isSelected,
  primary,
  blant,
  dark,
  ...props
}) => {
  const theme = useTheme();
  return (
    <ColorDivSetWrapper isSelected={isSelected} {...props}>
      <ColorDiv bgcolor={primary} />
      <ColorDiv bgcolor={blant} />
      <ColorDiv bgcolor={dark} />
    </ColorDivSetWrapper>
  );
};

const SettingsContext = createContext<useSettingsProps>(useSettingsContextInit);

const SettingsInstance: React.FC = () => {
  const theme = useTheme();
  const settingsState = useSettings();
  return (
    <SettingsContext.Provider value={settingsState}>
      <Stack gap="3rem">
        <Typography
          variant="h5"
          fontWeight="bold"
          textAlign={"center"}
          width="100%"
        >
          ACCOUNT SETTINGS
        </Typography>
        <Stack direction="row" gap="2rem">
          <Stack alignItems={"center"} gap="1rem">
            <ProfilePictureEditable />
            <Typography
              fontSize={"14px"}
              variant="inherit"
              width="10rem"
              height="4rem"
              textAlign={"center"}
            >
              {settingsState.status}
            </Typography>
          </Stack>
          <Stack gap="1rem">
            <AccountSettings />
          </Stack>
        </Stack>
        <DividerUI flexItem />
        <Typography
          variant="h5"
          fontWeight="bold"
          textAlign={"center"}
          width="100%"
        >
          THEME SETTINGS
        </Typography>
        <Stack direction="row" gap="2rem" justifyContent={"center"}>
          <ColorDivSet
            isSelected={settingsState.userInfo.theme === 0}
            onClick={() => {
              settingsState.handleThemeSelect(0);
            }}
            primary="#BA3C1E"
            blant="#594a46"
            dark="#221c1c"
          />
          <ColorDivSet
            isSelected={settingsState.userInfo.theme === 1}
            onClick={() => {
              settingsState.handleThemeSelect(1);
            }}
            primary="#189154"
            blant="#414945"
            dark="#1a1e1c"
          />
        </Stack>
      </Stack>
    </SettingsContext.Provider>
  );
};

export const useSettingsContext = () => useContext(SettingsContext);

export default SettingsInstance;
