import { useState } from "react";

const useSidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleExpand = () => setIsExpanded(true);
  const handleCollapse = () => setIsExpanded(false);
  return { isExpanded, handleCollapse, handleExpand };
};

export default useSidebar;
