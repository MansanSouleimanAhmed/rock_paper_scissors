import React, { Fragment } from "react";
import RockIcon from "../buttons/rock-icon";
import PaperIcon from "../buttons/paper-icon";
import ScissorsIcon from "../buttons/scissors-icon";

export default function ResultsRegular(props) {
  let paper;
  let rock;
  let scissors;
  const returnPaper = () => {
    if (props.computerchoice === "paper") {
      return (paper = <PaperIcon />);
    } else if (props.computerchoice != "paper") {
      return (paper = null);
    }
  };
  const returnRock = () => {
    if (props.computerchoice === "rock") {
      return (rock = <RockIcon />);
    } else if (props.computerchoice != "paper") {
      return (rock = null);
    }
  };
  const returnScissors = () => {
    if (props.computerchoice === "scissors") {
      return (scissors = <ScissorsIcon />);
    } else if (props.computerchoice != "scissors") {
      return (scissors = null);
    }
  };
  return (
    <Fragment>
      <div className={"results-regular"}>
        {returnPaper()}
        {returnRock()}
        {returnScissors()}
      </div>
    </Fragment>
  );
}
