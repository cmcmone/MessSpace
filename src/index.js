import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Clock from "./Clock";
import BtnEvent from "./BtnEvent";
import Toggle from "./Toggle";
import Greeting from "./Greeting";
import LoginControl from "./LoginControl";
import Page from "./Page";
import ListItems from "./ListItem";
import NameForm from "./NameForm";
import Reservation from './Reservation'
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />,{/* <Clock />, */}
    {/* <BtnEvent />, */}
    {/* <Toggle />, */}
    {/* <Greeting /> */}
    {/* <LoginControl /> */}
    {/* <Page /> */}
    {/* <ListItems />, */}
    {/* <NameForm /> */}
    <Reservation />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
