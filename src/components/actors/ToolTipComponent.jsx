import React, { useState } from "react";
import { Tooltip } from "reactstrap";

export const ToolTipComponent = ({id, name}) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  //state = {tooltipOpen: false}
  //setState=setTooltipOpen
  const toggle = () => setTooltipOpen(!tooltipOpen);
  //setState({toolTipOpen: !tooltipOpen})

  return (
    <div>
      {/* <p>
        Somewhere in here is a{" "}
        <a
          href="https://example.com"
          target="_blank"
          rel="noreferrer"
          id="TooltipExample"
        >
          tooltip
        </a>
        .
      </p> */}
      <Tooltip isOpen={tooltipOpen} target={id} toggle={toggle}> 
        {name}
      </Tooltip>
    </div>
  );
}



// export default ToolTipComponent;
