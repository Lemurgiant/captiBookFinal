import { IoHome } from "react-icons/io5";
import { ImStatsBars } from "react-icons/im";
import { GiArchiveResearch } from "react-icons/gi";
import { HiLibrary } from "react-icons/hi";
import { IoMdSettings } from "react-icons/io";
import { BiLogOut } from "react-icons/bi";

export const SIDEBAR_PATHS_TOP = [
  { url: "/home", label: "Home", logo: <IoHome size={26} /> },
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

export const SIDEBAR_PATHS_BOT = [
  { url: "/settings", label: "Settings", logo: <IoMdSettings size={26} /> },
  {
    url: "/logout",
    label: "Log out",
    logo: <BiLogOut size={26} />,
  },
];
