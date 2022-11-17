import React from "react";
import "./Calculator.css";
import { useState } from "react";

function Calculator() {
  const [num, setNum] = useState("");
  const handleClick = (e) => {
    setNum(num.concat(e.target.name));
  };
  const clear = () => {
    setNum("");
  };
  const evaluate = () => {
    setNum(eval(num).toString());
  };
  const backspace = () => {
    setNum(num.slice(0, num.length - 1));
  };
  return (
    <div className="">
      <div className="calculator">
        <form id="myForm" className="screen">
          <input type="text" value={num} />
        </form>
        <div className="container flex-style">
          <div className="row" id = "button-mod">
            <button
              className="buttons bg-warning"
              name="%"
              onClick={handleClick}
            >
              %
            </button>
            <button
              className="buttons bg-warning text-center"
              onClick={backspace}
            >
              B
            </button>
          </div>
          <div className="row">
            <button
              className="buttons bg-secondary number-button-color"
              name="9"
              onClick={handleClick}
            >
              9
            </button>
            <button
              className="buttons bg-secondary number-button-color"
              name="8"
              onClick={handleClick}
            >
              8
            </button>
            <button
              className="buttons bg-secondary number-button-color"
              name="7"
              onClick={handleClick}
            >
              7
            </button>
            <button className="buttons" name="*" onClick={handleClick}>
              *
            </button>
          </div>
          <div className=" row">
            <button
              className="buttons bg-secondary number-button-color"
              name="6"
              onClick={handleClick}
            >
              6
            </button>
            <button
              className="buttons bg-secondary number-button-color"
              name="5"
              onClick={handleClick}
            >
              5
            </button>
            <button
              className="buttons bg-secondary number-button-color"
              name="4"
              onClick={handleClick}
            >
              4
            </button>
            <button className="buttons" name="/" onClick={handleClick}>
              /
            </button>
          </div>
          <div className="row">
            <button
              className="buttons bg-secondary number-button-color"
              name="3"
              onClick={handleClick}
            >
              3
            </button>
            <button
              className="buttons bg-secondary number-button-color"
              name="2"
              onClick={handleClick}
            >
              2
            </button>
            <button
              className="buttons bg-secondary number-button-color"
              name="1"
              onClick={handleClick}
            >
              1
            </button>
            <button className="buttons" name="+" onClick={handleClick}>
              +
            </button>
          </div>
          <div className="row">
            <button className="buttons" name="0" onClick={handleClick}>
              0
            </button>
            <button className="buttons" name="." onClick={handleClick}>
              .
            </button>
            <button className="buttons bg-success" name="=" onClick={evaluate}>
              =
            </button>
            <button className="buttons bg-danger" name="" onClick={clear}>
              C
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
