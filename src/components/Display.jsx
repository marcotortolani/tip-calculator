import { useContext, useMemo } from "preact/hooks";
import { StateContext } from "../StateProvider";

let tipPerPerson = "0.00";
let totalPerPerson = "0.00";

export default function Display() {
  const { bill, setBill, tip, setTip, setCustomTip, people, setPeople } =
    useContext(StateContext);

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

  const handleReset = () => {
    setBill(0);
    setTip(10);
    setCustomTip(0);
    setPeople(0);
    tipPerPerson = "0.00";
    totalPerPerson = "0.00";
  };
  return (
    <section className="wrapper-display">
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
    </section>
  );
}
