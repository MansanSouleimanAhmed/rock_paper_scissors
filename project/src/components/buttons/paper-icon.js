import React, { useEffect, useState, forwardRef } from "react";
import IconPaper from "../svg/icon-paper";

function PaperIcon(props, ref) {
  return (
    <div
      className={"paper-icon icon"}
      id={"paper"}
      ref={ref}
      onClick={props.paperchoice}
    >
      <IconPaper />
    </div>
  );
}
export default React.forwardRef(PaperIcon);
