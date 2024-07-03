import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { EditIconUI } from "../../../components/Icons";
import useAuthApi from "../../../hooks/queries/useAuthApi";
import useUserInfoMutate from "../../../hooks/queries/useUserInfoMutate";
import { useSettingsContext } from "../SettingsInstance";

const ProfilePictureEditableWrapper = styled.label`
  width: 9rem;
  height: 9rem;
  background: white;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FileInput = styled.input`
  display: none; /* Hide by default */
`;

const EditButtonWrapper = styled.label`
  position: absolute;
  top: 3px;
  right: 3px;
  width: 2.2rem;
  height: 2.2rem;
  background: ${({ theme }) => theme.blant};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid ${({ theme }) => theme.light};
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.blant};
  }
`;

const EditIcon = styled(EditIconUI)`
  width: 1.5rem;
  height: 1.5rem;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

const ProfilePictureEditable = () => {
  const { userInfo, handleFileChange } = useSettingsContext();

  return (
    <ProfilePictureEditableWrapper htmlFor="fileInput">
      <Image src={userInfo.image ?? undefined} alt="Profile" />
      <FileInput
        id="fileInput"
        type="file"
        onChange={handleFileChange}
        accept=".jpeg, .png, .jpg" // Restrict to these file types
      />
      <EditButtonWrapper htmlFor="fileInput">
        <EditIcon />
      </EditButtonWrapper>
    </ProfilePictureEditableWrapper>
  );
};

export default ProfilePictureEditable;
