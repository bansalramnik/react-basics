import React from "react";
import ReactDOM from "react-dom";
import IndecisionApp from "./components/IndecisionApp";
import 'normalize.css/normalize.css';
import  './styles/styles.scss';

ReactDOM.render(<IndecisionApp />, document.getElementById("root"));

// class OldSyntax {
//   constructor() {
//     this.name = "Testing Old";
//   }
// }
// ---------------------------------
// New Syntax is after the installation of a Babel Plugin transform-class-properties
// ---------------------------------
// class NewSyntax {
//   name = "Testing New.";
// }

// console.log(new OldSyntax());
// console.log(new NewSyntax());
