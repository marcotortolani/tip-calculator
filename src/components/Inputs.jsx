import { useContext } from "preact/hooks";
import { StateContext } from "../StateProvider";
import { ConfigContext } from "../ConfigProvider";

const valuesTips = [5, 10, 15, 25, 50];

export default function Inputs() {
  const {
    primary,
    primaryTitle,
    secondary,
    textBtn,
    backgroundInput,
    backgroundBtn,
    error,
  } = useContext(ConfigContext);
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
        <h3 className="bill-title" style={{ color: primaryTitle }}>
          Bill
        </h3>
        <div className="wrapper-input">
          <input
            className="bill-input"
            style={{
              color: secondary,
              backgroundColor: backgroundInput,
              outlineColor: primary,
            }}
            type="number"
            placeholder="0"
            value={bill > 0 ? bill : null}
            onChange={(e) => handleBillInput(e)}
          />
        </div>
      </div>

      <div className="wrapper-tip-buttons">
        <h3 className="tip-title" style={{ color: primaryTitle }}>
          Select Tip %
        </h3>
        <div className="buttons-container">
          {valuesTips.map((valueTip, index) => (
            <button
              className="btn"
              style={{
                backgroundColor: valueTip === tip ? primary : backgroundBtn,
                color: valueTip === tip ? secondary : textBtn,
              }}
              onClick={() => handleTip(index)}
              type="button"
              key={index}
            >
              {valueTip}%
            </button>
          ))}

          <input
            className="btn input-custom"
            style={{
              color: secondary,
              backgroundColor: customTip > 0 ? primary : backgroundInput,
              outlineColor: primary,
            }}
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
          <h3 className="people-title" style={{ color: primaryTitle }}>
            Number of People
          </h3>
          {people <= 0 && (
            <span className="people-error" style={{ color: error }}>
              Can't be zero
            </span>
          )}
        </div>

        <div className="wrapper-input">
          <input
            className="people-input"
            style={{
              color: secondary,
              backgroundColor: backgroundInput,
              outlineColor: primary,
              borderColor: people <= 0 ? error : "transparent",
            }}
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
