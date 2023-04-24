import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [monitor, setMonitor] = useState(0);
  const [inputNum, setInputNum] = useState(0);
  const [decimal, setDecimal] = useState(false);
  const [decimalCount, setDecimalCount] = useState(1);
  const [operator, setOperator] = useState("");
  const [calculatedSum, setCalculatedSum] = useState(0);

  useEffect(() => {
    setMonitor(inputNum);
  }, [inputNum]);

  useEffect(() => {
    setMonitor(calculatedSum);
  }, [calculatedSum]);

  // useEffect(() => {
  //   document.addEventListener("keyup", getKeyPress);
  //   return () => document.removeEventListener("keyup", getKeyPress);
  // }, []);

  //getting input number
  const inputNumTotal = (num) => {
    if (decimal) {
      num = num / Math.pow(10, decimalCount);
      setDecimalCount(decimalCount + 1);
      setInputNum(parseFloat((inputNum + num).toFixed(decimalCount)));
    } else {
      setInputNum(inputNum * 10 + num);
    }
  };

  //getting operator
  const inputOperator = (operator) => {
    setOperator(operator);
    calculate();
    setInputNum(0);
  };

  //calculating
  const calculate = () => {
    console.log("calculating");
    setDecimal(false);
    setDecimalCount(1);

    //edge cases
    if (inputNum === 0 && operator === "/") {
      setCalculatedSum(NaN);
      setInputNum(0);
      return;
    }

    if (calculatedSum === 0 && inputNum === 0) return;

    switch (operator) {
      case "+":
        setCalculatedSum(calculatedSum + inputNum);
        break;
      case "-":
        setCalculatedSum(calculatedSum - inputNum);
        break;
      case "*":
        setCalculatedSum(calculatedSum * inputNum);
        break;
      case "/":
        setCalculatedSum(calculatedSum / inputNum);
        break;
    }

    if (operator === "") setCalculatedSum(inputNum);
    else setInputNum(0);
    return;
  };

  const equal = () => {
    calculate();
    setOperator("");
  };

  //clear
  const clearAll = () => {
    setInputNum(0);
    setOperator("");
    setMonitor(0);
    setCalculatedSum(0);
  };
  return (
    <>
      <div className="calculatorWrap">
        <div className="container">
          <form action="" name="calc" className="calculator">
            <input
              type="text"
              className="value"
              name="txt"
              value={monitor}
              readOnly
            />
            <span className="num clear" onClick={() => clearAll()}>
              <i>C</i>
            </span>
            <span className="num" onClick={() => inputOperator("/")}>
              <i>/</i>
            </span>
            <span className="num" onClick={() => inputOperator("*")}>
              <i>*</i>
            </span>
            <span className="num" onClick={() => inputNumTotal(7)}>
              <i>7</i>
            </span>
            <span className="num" onClick={() => inputNumTotal(8)}>
              <i>8</i>
            </span>
            <span className="num" onClick={() => inputNumTotal(9)}>
              <i>9</i>
            </span>
            <span className="num" onClick={() => inputOperator("-")}>
              <i>-</i>
            </span>
            <span className="num" onClick={() => inputNumTotal(4)}>
              <i>4</i>
            </span>
            <span className="num" onClick={() => inputNumTotal(5)}>
              <i>5</i>
            </span>
            <span className="num" onClick={() => inputNumTotal(6)}>
              <i>6</i>
            </span>
            <span className="num plus" onClick={() => inputOperator("+")}>
              <i>+</i>
            </span>
            <span className="num" onClick={() => inputNumTotal(1)}>
              <i>1</i>
            </span>
            <span className="num" onClick={() => inputNumTotal(2)}>
              <i>2</i>
            </span>
            <span className="num" onClick={() => inputNumTotal(3)}>
              <i>3</i>
            </span>
            <span className="num" onClick={() => inputNumTotal(0)}>
              <i>0</i>
            </span>
            <span className="num dot" onClick={() => setDecimal(true)}>
              <i>.</i>
            </span>

            <span className="num equal" onClick={() => equal()}>
              <i>=</i>
            </span>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
