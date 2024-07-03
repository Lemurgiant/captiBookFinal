import SidebarWrapper from "./components/SidebarWrapper";
import BrandLogo from "./components/BrandLogo";
import UserProfile from "./components/UserProfile";
import { Stack } from "@mui/material";
import NavButton from "./components/NavButton";
import Divider from "@mui/material/Divider";
import { renderButtonGroupProps } from "./interface";
import { NAV_BUTTON_GROUP_BOT, NAV_BUTTON_GROUP_TOP } from "./constants";
import useSidebar from "./useSidebar";
import { BiLogOut } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LogoutButton from "./components/LogoutButton";
import useAuthApi from "../../hooks/queries/useAuthApi";
import { useEffect } from "react";

//----------------------------------------------------------------//

const renderButtonGroup: React.FC<renderButtonGroupProps> = ({
  navButtonGroup,
  isExpanded,
}) => (
  <Stack gap="0.4rem">
    {navButtonGroup.map((button, index) => (
      <NavButton
        key={index}
        to={button.url}
        isExpanded={isExpanded}
        label={button.label}
        logo={button.logo}
      />
    ))}
  </Stack>
);

//----------------------------------------------------------------//

const Sidebar: React.FC = () => {
  const { userInfo } = useAuthApi();

  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:5000/logout", {
        method: "GET",
        credentials: "include", // Send cookies along with the request
      });
      if (response.ok) {
        window.location.reload();
      }
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  // Using the function in a component
  <button onClick={handleLogout}>Logout</button>;

  const { isExpanded, handleExpand, handleCollapse } = useSidebar();
  return (
    <SidebarWrapper
      isExpanded={isExpanded}
      onMouseOver={handleExpand}
      onMouseLeave={handleCollapse}
    >
      <BrandLogo isExpanded={isExpanded} src="logo.png" label="CaptiBook" />
      <UserProfile
        isExpanded={isExpanded}
        username={userInfo?.displayName}
        userId={userInfo?.googleId}
        userImg={userInfo?.image}
      />
      <Stack gap="4rem" justifyContent={"space-between"}>
        {renderButtonGroup({
          navButtonGroup: NAV_BUTTON_GROUP_TOP,
          isExpanded,
        })}
        <Divider />
        <Stack gap="0.4rem">
          {renderButtonGroup({
            navButtonGroup: NAV_BUTTON_GROUP_BOT,
            isExpanded,
          })}
          <LogoutButton
            isExpanded={isExpanded}
            label="Logout"
            logo={<BiLogOut size={26} />}
            onClick={(event) => {
              event.preventDefault();
              handleLogout(); // Invoke the handleLogout function
            }}
          />
        </Stack>
      </Stack>
    </SidebarWrapper>
  );
};

export default Sidebar;
