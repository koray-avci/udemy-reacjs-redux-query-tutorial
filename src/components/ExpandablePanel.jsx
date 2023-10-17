import React, { useState } from "react";

import { GoChevronLeft, GoChevronDown } from "react-icons/go";

const ExpandablePanel = ({ children, header }) => {
  const [expanded, setExpanded] = useState(false);
  const handleClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="panelDiv">
      <div className="topArrangement">
        <div className="topArrangement">{header}</div>
        <div onClick={handleClick}>
          {expanded ? <GoChevronDown /> : <GoChevronLeft />}
        </div>
      </div>
      {expanded && <div>{children}</div>}
    </div>
  );
};

export default ExpandablePanel;
