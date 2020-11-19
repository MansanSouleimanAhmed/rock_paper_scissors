import React, { Fragment, forwardRef } from "react";
import IconScissors from "../svg/icon-scissors";

function ScissorsIcon(props, ref) {
  return (
    <Fragment>
      <div
        className={"scissors-icon icon"}
        id={"scissors"}
        ref={ref}
        onClick={props.scissorschoice}
      >
        <IconScissors />
      </div>
    </Fragment>
  );
}
export default React.forwardRef(ScissorsIcon);
