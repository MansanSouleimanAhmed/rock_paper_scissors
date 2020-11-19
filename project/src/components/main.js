import React, { Fragment, useState, useEffect, useRef } from "react";
import Bonus from "./bonus";
import Regular from "./regular";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import paperIcon from "./buttons/paper-icon";
import regeneratorRuntime from "regenerator-runtime";
import axios from "axios";

export default function Main() {
  const [response, setResponse] = useState(0);
  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [toggle, setToggle] = useState(true);

  const ENDPOINT = "http://localhost:5000/";

  const [showLoading, setShowLoading] = useState(false);
  const timerToClearSomewhere = useRef(null);
  //Send the pathname to the main page each time you reload the page.
  window.history.replaceState(null, "Main", "/");
  const [data, setData] = useState({ hits: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(ENDPOINT);
      setData(result.data);

      setResponse(result.data.backEnd);
    };
    // fetchData();
  }, []);

  console.log("response :" + response);

  function referee() {
    var training = {};
    function learn(winner, loser) {
      if (!training[winner]) training[winner] = {};
      training[winner][loser] = 1;
    }
    const judge = (play1, play2) => {
      let playerOne = 1;
      let playerTwo = 2;
      if (play1 === play2) {
        return "tie";
      }
      return training[play1][play2] === 1 ? playerOne : playerTwo;
    };
    const validate = (choice) => {
      return choice in training;
    };
    const choices = () => {
      return Object.keys(training);
    };
    return {
      learn: learn,
      judge: judge,
      validAction: validate,
      getChoices: choices,
    };
  }

  let ref = referee();
  ref.learn("rock", "scissors");
  ref.learn("paper", "rock");
  ref.learn("scissors", "paper");
  const changeToggle = (e) => {
    setToggle((state) => !state);
  };
  const result = () => {
    if (computerChoice != "") {
      let result = ref.judge(userChoice, computerChoice);
      if (result === 1) {
        console.log(result);
        const sendOne = () => {
          const body = JSON.stringify({
            user: {
              name: "John",
              email: "john@example.com",
            },
          });
          const options = {
            method: "POST",
            headers: { "content-type": "application/x-www-form-urlencoded" },
            body,
            ENDPOINT,
          };

          fetch(options)
            .then((response) => {
              console.log("sent");
            })
            .catch((er) => {
              console.log(er);
            });
        };
        // sendOne();
      }
    }
  };
  result();
  let display = {};
  const toggleFunction = () => {
    if (toggle) {
      return (display = { display: "block" });
    } else {
      return (display = { display: "none" });
    }
  };
  toggleFunction();

  vtps: return (
    <Fragment>
      <Router>
        <div className={"main"}>
          <nav>
            <ul style={display}>
              <li>
                <Link
                  to={"/regular"}
                  onClick={() => {
                    setToggle((state) => !state);
                  }}
                >
                  {"Regular"}
                </Link>
              </li>
              <li>
                <Link
                  to={"/bonus"}
                  onClick={() => {
                    setToggle((state) => !state);
                  }}
                >
                  {"Bonus"}
                </Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route
              path={"/regular"}
              render={() => (
                <Regular
                  userchoice={userChoice}
                  setuserchoice={setUserChoice}
                  toggle={toggle}
                  onClick={changeToggle}
                  computerchoice={computerChoice}
                  setcomputerchoice={setComputerChoice}
                  referee={ref}
                />
              )}
            />
            <Route
              path={"/bonus"}
              render={() => (
                <Bonus toggle={toggle} data={data} onClick={changeToggle} />
              )}
            />
          </Switch>
        </div>
      </Router>
    </Fragment>
  );
}
