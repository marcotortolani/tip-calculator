import { useContext } from "preact/hooks";
import { StateContext } from "../StateProvider";

const valuesTips = [5, 10, 15, 25, 50];

export default function Inputs() {
  const {
    bill,
    setBill,
    tip,
    setTip,
    customTip,
    setCustomTip,
    people,
    setPeople,
  } = useContext(StateContext);

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
  return (
    <section className="wrapper-inputs">
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
          {people <= 0 && <span className="people-error">Can't be zero</span>}
        </div>

        <div className="wrapper-input">
          <input
            className={people > 0 ? "people-input" : "people-input wrong-input"}
            type="number"
            placeholder="0"
            value={people > 0 ? people : null}
            onChange={(e) => handlePeopleInput(e)}
          />
        </div>
      </div>
    </section>
  );
}
