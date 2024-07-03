import { GiArchiveResearch } from "react-icons/gi";
import { HiLibrary } from "react-icons/hi";
import { ImStatsBars } from "react-icons/im";
import { IoHome } from "react-icons/io5";
import { NavButtonItem } from "./interface";
import { IoMdSettings } from "react-icons/io";
import { BiLogOut } from "react-icons/bi";

export const SIDEBAR_WIDTH_EXPANDED: string = "14rem";
export const SIDEBAR_WIDTH_COLLAPSED: string = "5rem";
export const MOBILE_SIDEBAR_WIDTH_EXPANDED: string = "14rem";
export const MOBILE_SIDEBAR_WIDTH_COLLAPSED: string = "4rem";

export const NAV_BUTTON_GROUP_TOP: NavButtonItem[] = [
  { url: "/", label: "Home", logo: <IoHome size={26} /> },
  {
    url: "/habittracker",
    label: "Habit Tracker",
    logo: <ImStatsBars size={26} />,
  },
  {
    url: "/bookinsights",
    label: "Book Insights",
    logo: <GiArchiveResearch size={26} />,
  },
  { url: "/library", label: "Library", logo: <HiLibrary size={26} /> },
];

export const NAV_BUTTON_GROUP_BOT: NavButtonItem[] = [
  { url: "/settings", label: "Settings", logo: <IoMdSettings size={26} /> },
];
