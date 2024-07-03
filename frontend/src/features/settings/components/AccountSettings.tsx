import { Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PrimaryTextField from "../../../components/PrimaryTextFieldUI";
import PrimaryButtonUI from "../../../components/PrimaryButtonUI";
import useAuthApi from "../../../hooks/queries/useAuthApi";
import useUserInfoMutate from "../../../hooks/queries/useUserInfoMutate";
import { useSettingsContext } from "../SettingsInstance";
import { isEmptyString } from "./../../helper";

const FieldTypography = styled.div`
  width: 8rem;
  margin-right: 2rem;
  font-size: 14px;
  text-align: end;
`;

const InfoTypography = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.light};
  opacity: 0.8;
`;

const AccountSettings = () => {
  const {
    displayNameInputVal,
    userInfo,
    handleDisplayNameUpdate,
    handleDisplayNameChange,
  } = useSettingsContext();
  return (
    <>
      <Stack direction="row" alignItems={"center"}>
        <FieldTypography>ACCOUNT NAME:</FieldTypography>
        <Stack direction="row" alignItems={"center"} gap="0.3rem">
          <PrimaryTextField
            size="small"
            value={
              displayNameInputVal !== null
                ? displayNameInputVal
                : userInfo.displayName
            }
            onChange={handleDisplayNameChange}
          />
          <PrimaryButtonUI
            onClick={handleDisplayNameUpdate}
            isDisabled={isEmptyString(displayNameInputVal)}
          >
            SAVE
          </PrimaryButtonUI>
        </Stack>
      </Stack>
      <Stack direction="row">
        <FieldTypography>EMAIL:</FieldTypography>
        <InfoTypography>{userInfo.email}</InfoTypography>
      </Stack>
    </>
  );
};

export default AccountSettings;
