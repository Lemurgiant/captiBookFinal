import React, { useState } from "react";
import PrimaryFrameUI from "../../components/PrimaryFrameUI";
import styled from "styled-components";
import { ColorResult, HuePicker } from "react-color";
import PrimaryButtonUI from "../../components/PrimaryButtonUI";
import SettingsInstance from "../../features/settings/SettingsInstance";

const SettingsPageWrapper = styled(PrimaryFrameUI)`
  width: 70%;
  height: 95%;
  display: flex;
  padding: 3rem;
  box-sizing: border-box;
  justify-content: center;
`;

const SettingsPage: React.FC = () => {
  return (
    <SettingsPageWrapper>
      <SettingsInstance />
    </SettingsPageWrapper>
  );
};

export default SettingsPage;
