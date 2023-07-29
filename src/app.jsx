import { useEffect, useState, useMemo } from "preact/hooks";

import "./app.scss";

const valuesTips = [5, 10, 15, 25, 50];

let tipPerPerson = "0.00";
let totalPerPerson;

export function App() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(10);
  const [customTip, setCustomTip] = useState(0);
  const [people, setPeople] = useState(0);

  useMemo(() => {
    if (!people) return (totalPerPerson = "0.00");

    tipPerPerson =
      people != 0
        ? parseFloat((bill * (tip / 100)) / people).toFixed(2)
        : "0.00";

    totalPerPerson =
      people != 0
        ? parseFloat(bill / people + parseFloat(tipPerPerson)).toFixed(2)
        : "0.00";
  }, [bill, people, tip]);

  const handleBillInput = (e) => {
    setBill(e.target.value);
  };

  const handleTip = (index) => {
    setTip(valuesTips[index]);
    setCustomTip(0);
  };

  const handleCustomTip = (e) => {
    setCustomTip(e.target.value);
    setTip(e.target.value);
  };

  const handlePeopleInput = (e) => {
    setPeople(e.target.value);
  };

  // useEffect(() => {
  //   if (bill === 0 && people === 0) return;
  //   console.log("cambio bill o people");
  //   totalPerPerson = people === 0 ? 0 : bill / people;
  // }, [bill, people]);

  const handleReset = () => {
    setBill(0);
    setTip(10);
    setCustomTip(0);
    setPeople(0);
    tipPerPerson = "0.00";
    totalPerPerson = "0.00";
  };

  return (
    <div className="App">
      <h1 className="app-title">Tip Calculator</h1>

      <div className="wrapper-calculator">
        <div className="wrapper-inputs">
          <div className="wrapper-bill">
            <h3 className="bill-title">Bill</h3>
            <div className="wrapper-input">
              <input
                className="bill-input"
                type="number"
                placeholder="0"
                value={bill > 0 ? bill : null}
                onChange={(e) => handleBillInput(e)}
              />
            </div>
          </div>

          <div className="wrapper-tip-buttons">
            <h3 className="tip-title">Select Tip %</h3>
            <div className="buttons-container">
              {valuesTips.map((valueTip, index) => (
                <button
                  className={valueTip === tip ? "btn active" : "btn"}
                  onClick={() => handleTip(index)}
                  type="button"
                  key={index}
                >
                  {valueTip}%
                </button>
              ))}

              <input
                className={
                  customTip > 0 ? "btn input-custom active" : "btn input-custom"
                }
                type="number"
                placeholder="Custom"
                value={customTip > 0 ? customTip : null}
                onChange={(e) => handleCustomTip(e)}
              >
                Custom
              </input>
            </div>
          </div>

          <div className="wrapper-people">
            <div className="people-text">
              <h3 className="people-title">Number of People</h3>
              <span className="people-error" hidden>
                Can't be zero
              </span>
            </div>

            <div className="wrapper-input">
              <input
                className="people-input wrong-input2"
                type="number"
                placeholder="0"
                value={people > 0 ? people : null}
                onChange={(e) => handlePeopleInput(e)}
              />
            </div>
          </div>
        </div>

        <div className="wrapper-display">
          <div className="amounts-container">
            <div className="wrapper-tip-amount">
              <div className="tip-title">
                <h3>Tip Amount</h3>
                <h4>/ person</h4>
              </div>

              <div className="tip-amount">
                <span>${tipPerPerson}</span>
              </div>
            </div>

            <div className="wrapper-total">
              <div className="total-title">
                <h3>Total</h3>
                <h4>/ person</h4>
              </div>

              <div className="total-amount">
                <span>${totalPerPerson}</span>
              </div>
            </div>
          </div>

          <div className="btn-container">
            <button className="btn-reset" type="button" onClick={handleReset}>
              Reset
            </button>
          </div>
        </div>
      </div>

      <footer>
        <div className="attribution">
          <div>
            Challenge by{" "}
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
            >
              Frontend Mentor
            </a>
          </div>
          <span> - </span> 
          <div>
            Coded by{" "}
            <a href="https://mtorto.com" target="_blank">
              Marco Tortolani
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
