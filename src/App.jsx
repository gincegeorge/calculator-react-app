import { useState, useEffect } from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="calculatorWrap">
        <div className="container">
          <form action="" name="calc" className="calculator">
            <input type="text" className="value" name="txt" value="" readOnly />
            <span className="num clear">
              <i>C</i>
            </span>
            <span className="num">
              <i>/</i>
            </span>
            <span className="num">
              <i>*</i>
            </span>
            <span className="num">
              <i>7</i>
            </span>
            <span className="num">
              <i>8</i>
            </span>
            <span className="num">
              <i>9</i>
            </span>
            <span className="num">
              <i>-</i>
            </span>
            <span className="num">
              <i>4</i>
            </span>
            <span className="num">
              <i>5</i>
            </span>
            <span className="num">
              <i>6</i>
            </span>
            <span className="num plus">
              <i>+</i>
            </span>
            <span className="num">
              <i>1</i>
            </span>
            <span className="num">
              <i>2</i>
            </span>
            <span className="num">
              <i>3</i>
            </span>
            <span className="num">
              <i>0</i>
            </span>
            <span className="num dot">
              <i>.</i>
            </span>

            <span className="num equal">
              <i>=</i>
            </span>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
