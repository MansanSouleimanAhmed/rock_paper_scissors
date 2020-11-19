import React, { Fragment, forwardRef } from "react";
import IconRock from "../svg/icon-rock";

function RockIcon(props, ref) {
  /// console.log(props.toggleRegular);
  return (
    <Fragment>
      <div
        className={"rock-icon icon"}
        id={"rock"}
        ref={ref}
        onClick={props.rockchoice}
      >
        <IconRock />
      </div>
    </Fragment>
  );
}
export default React.forwardRef(RockIcon);
