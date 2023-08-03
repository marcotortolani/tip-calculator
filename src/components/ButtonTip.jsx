import { useContext } from "preact/hooks";
import { ConfigContext } from "../ConfigProvider";
import { StateContext } from "../StateProvider";

export default function ButtonTip({ value }) {
  const { primary, secondary, textBtn, backgroundBtn } =
    useContext(ConfigContext);
    const { tip, setTip, setCustomTip } =
    useContext(StateContext);

  const handleTip = () => {
    setTip(value);
    setCustomTip(0);
  };
  return (
    <button
      className="btn"
      style={{
        backgroundColor: value === tip ? primary : backgroundBtn,
        color: value === tip ? secondary : textBtn,
      }}
      onClick={handleTip}
      type="button"
    >
      {value}%
    </button>
  );
}
