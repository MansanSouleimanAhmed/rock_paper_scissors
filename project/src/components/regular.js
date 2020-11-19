import React, { Fragment, useState, useEffect, useRef } from "react";
import Logo from "./svg/logo";
import BgTriangle from "./svg/bg-triangle";
import IconRock from "./svg/icon-rock";
import IconScissors from "./svg/icon-scissors";
import IconPaper from "./svg/icon-paper";
import RockIcon from "./buttons/rock-icon";
import ScissorsIcon from "./buttons/scissors-icon";
import PaperIcon from "./buttons/paper-icon";
import ResultsRegular from "./results-page/results-regular";

export default function Regular(props) {
  const [toggleRegular, setToggleRegular] = useState(false);

  const paper = useRef(null);
  const rock = useRef(null);
  const scissors = useRef(null);
  let displayResult = {};
  let displayTriangle = {};
  const playAgain = () => {
    setToggleRegular((state) => !state);
  };
  const computerChoice = () => {
    let choices = props.referee.getChoices();
    props.setcomputerchoice(
      choices[Math.floor(Math.random() * choices.length)]
    );
  };
  const paperChoice = (e) => {
    setToggleRegular((state) => !state);
    scissors.current.style.zIndex = "0";
    rock.current.style.zIndex = "0";
    paper.current.style.zIndex = "3";
    props.setuserchoice("paper");
    computerChoice();
  };
  const rockChoice = (e) => {
    paper.current.style.zIndex = "0";
    scissors.current.style.zIndex = "0";
    rock.current.style.zIndex = "3";
    setToggleRegular((state) => !state);
    props.setuserchoice("rock");
    computerChoice();
  };
  const scissorsChoice = (e) => {
    setToggleRegular((state) => !state);
    paper.current.style.zIndex = "0";
    rock.current.style.zIndex = "0";
    scissors.current.style.zIndex = "3";
    props.setuserchoice("scissors");
    computerChoice();
  };

  const bgTriangleFunction = () => {
    if (!toggleRegular) {
      return (displayTriangle = { display: "block" });
    } else {
      return (displayTriangle = { display: "none" });
    }
  };
  bgTriangleFunction();

  const resultFunction = () => {
    if (!toggleRegular) {
      return (displayResult = { display: "none" });
    } else {
      return (displayResult = { display: "block" });
    }
  };

  resultFunction();

  return (
    <Fragment>
      <section className={"common-style"}>
        <div className={"logo-score"}>
          <div className={"logo"}>
            <a href={"/"}>
              <Logo />
            </a>
          </div>
          <div className={"score"}> </div>
        </div>
        <div className={"bg-triangle"} style={displayTriangle}>
          <BgTriangle />
          <RockIcon rockchoice={rockChoice} toggleRegular={toggleRegular} />
          <ScissorsIcon
            scissorschoice={scissorsChoice}
            toggleRegular={toggleRegular}
          />
          <PaperIcon paperchoice={paperChoice} toggleRegular={toggleRegular} />
        </div>
        <div className={"regular-result"} style={displayResult}>
          <div className={"container-icons"}>
            <div className={"user-choice"}>
              <PaperIcon ref={paper} /> <RockIcon ref={rock} />
              <ScissorsIcon ref={scissors} />
            </div>
            <ResultsRegular computerchoice={props.computerchoice} />
          </div>
          <div className={"play-again"}>
            <p>{"YOU WIN"}</p>
            <p>{"YOU LOSE"}</p>
            <p onClick={playAgain}>{"Play again"}</p>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
