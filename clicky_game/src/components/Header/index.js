import React from "react";
import "./header.css";

const Header = props => (
  <ul className="nav nav-pills nav-fill">
    <li className="title nav-link active">
      <a>Clicky Game{props.title}</a>
    </li>
    <li className="guesses" className={props.correct?"correct": props.incorrect? "incorrect" :""}>
      <a>{props.message}</a>
    </li>
    <li className="score">
      <a> Score: {props.score} | Top Score: {props.topScore}</a>
    </li>
  </ul>
);

export default Header;

