import { useContext, useMemo } from "preact/hooks";
import { ConfigContext } from "../ConfigProvider";
import { StateContext } from "../StateProvider";

export default function Input({ type }) {
  const { primary, secondary, backgroundInput, error } =
    useContext(ConfigContext);
  const { calcState, dispatch } = useContext(StateContext);
  const { bill, people } = calcState;

  const value = useMemo(() => {
    if (type === "bill") return bill > 0 ? bill : null;
    if (type === "people") return people > 0 ? people : null;
  }, [type, bill, people]);

  const handleInput = (e) => {
    const inputValue = e.target.value;
    if (type === "bill") dispatch({ type: "ADD_BILL", bill: inputValue });
    if (type === "people") dispatch({ type: "ADD_PEOPLE", people: inputValue });
  };

  return (
    <div className="wrapper-input">
      <input
        className={`${type}-input`}
        style={{
          color: secondary,
          backgroundColor: backgroundInput,
          outlineColor: primary,
          borderColor: type === "people" && people <= 0 ? error : "transparent",
        }}
        type="number"
        placeholder="0"
        value={value}
        onChange={(e) => handleInput(e)}
      />
    </div>
  );
}
