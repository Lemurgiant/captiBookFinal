import React from "react";
import styled from "styled-components";
import { ExpandableProps, UserProfileProps } from "../interface";
import { NORMAL_TRANSITION } from "../../constants";

const UserProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 10rem;
`;

const UserPhoto = styled.img<ExpandableProps>`
  transition: ${NORMAL_TRANSITION};
  width: ${({ isExpanded }) => (isExpanded ? "5rem" : "3rem")};
  height: ${({ isExpanded }) => (isExpanded ? "5rem" : "3rem")};
  border-radius: 50%;
  background-color: white;
  margin-bottom: 0.8rem;

  @media (max-width: 576px) {
    width: ${({ isExpanded }) => (isExpanded ? "5rem" : "2.5rem")};
    height: ${({ isExpanded }) => (isExpanded ? "5rem" : "2.5rem")};
  }
`;

const UserName = styled.div<ExpandableProps>`
  transition: ${NORMAL_TRANSITION};
  max-width: ${({ isExpanded }) => (isExpanded ? "auto" : "0")};
  overflow: hidden;
  color: white;
  font-weight: 600;
  font-size: 17px;
  opacity: ${({ isExpanded }) => (isExpanded ? "1" : "0")};
`;

// const UserID = styled.div<ExpandableProps>`
//   transition: ${NORMAL_TRANSITION};
//   max-width: ${({ isExpanded }) => (isExpanded ? "auto" : "0")};
//   overflow: hidden;
//   color: white;
//   font-size: 13px;
//   opacity: ${({ isExpanded }) => (isExpanded ? "1" : "0")};
// `;

const UserProfile: React.FC<UserProfileProps> = React.memo(
  ({ isExpanded, username, userImg }) => (
    <UserProfileContainer>
      <UserPhoto isExpanded={isExpanded} src={userImg} alt="User Profile" />
      <UserName isExpanded={isExpanded}>{username}</UserName>
    </UserProfileContainer>
  )
);

export default UserProfile;
