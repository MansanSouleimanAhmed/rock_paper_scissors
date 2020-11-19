import React, { Fragment } from "react";
import LogoBonus from "./svg/logo-bonus";

import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import BgPentagon from "./svg/bg-pentagon";
import PaperIcon from "./buttons/paper-icon";
import ScissorsIcon from "./buttons/scissors-icon";
import RockIcon from "./buttons/rock-icon";
import LizardIcon from "./buttons/lizard-icon";
import SpockIcon from "./buttons/spock-icon";
const navDispear = { display: "none" };
export default function Bonus(props) {
  return (
    <Fragment>
      <section className={"common-style"}>
        <div className={"logo-score"}>
          <div className={"logo"}>
            <a href={"/"}>
              <LogoBonus />
            </a>
          </div>
          <div className={"score"}></div>
        </div>
        <div className={"bg-pentagone"}>
          <BgPentagon />
          <RockIcon />
          <ScissorsIcon />
          <PaperIcon />
          <LizardIcon />
          <SpockIcon />
        </div>
      </section>
    </Fragment>
  );
}
