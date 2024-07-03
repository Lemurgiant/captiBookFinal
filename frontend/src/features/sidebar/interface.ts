// BrandLogo.tsx

import { HTMLAttributes } from "react";

export interface BrandLogoProps {
  isExpanded: boolean;
  src: string;
  label: string;
}

//---------------------------------------------------------//

// NavButton.tsx

export interface NavButtonProps extends NavButtonWrapperProps {
  logo: React.ReactNode;
  label: string;
  to: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

//---------------------------------------------------------//

// UserProfile.tsx

export interface UserProfileProps {
  isExpanded: boolean;
  username: string;
  userId: string;
  userImg: string;
}

//---------------------------------------------------------//

// constants.tsx

export interface NavButtonItem {
  url: string;
  label: string;
  logo: JSX.Element;
}

//---------------------------------------------------------//

// Sidebar.tsx

export interface renderButtonGroupProps extends ExpandableProps {
  navButtonGroup: NavButtonItem[];
}

//---------------------------------------------------------//

// local

export interface ExpandableProps {
  isExpanded: boolean;
}

export interface NavButtonWrapperProps
  extends HTMLAttributes<HTMLAnchorElement> {
  isExpanded: boolean;
}

export interface LogoutButtonProps extends NavButtonWrapperProps {
  logo: React.ReactNode;
  label: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}
