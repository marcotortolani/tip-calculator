import { useContext } from "preact/hooks";
import { ConfigContext } from "../ConfigProvider";
import { StateContext } from "../StateProvider";

export default function ButtonTip({ value }) {
  const { primary, secondary, textBtn, backgroundBtn } =
    useContext(ConfigContext);
  const { calcState, dispatch } = useContext(StateContext);
  const { tip } = calcState;

  const handleTip = () => {
    dispatch({ type: "SELECT_TIP", tip: value });
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
