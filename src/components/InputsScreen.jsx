import { useContext } from "preact/hooks";
import { StateContext } from "../StateProvider";
import { ConfigContext } from "../ConfigProvider";
import Input from "./Input";
import ButtonTip from "./ButtonTip";

const valuesTips = [5, 10, 15, 25, 50];

export default function InputsScreen() {
  const { primary, primaryTitle, secondary, backgroundInput, error } =
    useContext(ConfigContext);
  const { setTip, customTip, setCustomTip, people } = useContext(StateContext);

  const handleCustomTip = (e) => {
    setCustomTip(e.target.value);
    setTip(e.target.value);
  };

  return (
    <section className="wrapper-inputs">
      <div className="wrapper-bill">
        <h3 className="bill-title" style={{ color: primaryTitle }}>
          Bill
        </h3>
        <Input type="bill" />
      </div>

      <div className="wrapper-tip-buttons">
        <h3 className="tip-title" style={{ color: primaryTitle }}>
          Select Tip %
        </h3>
        <div className="buttons-container">
          {valuesTips.map((valueTip, index) => (
            <ButtonTip value={valueTip} key={index} />
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
        <Input type="people" />
      </div>
    </section>
  );
}
