import { useContext, useMemo } from "preact/hooks";
import { ConfigContext } from "../ConfigProvider";
import { StateContext } from "../StateProvider";

export default function Input({ type }) {
  const { primary, secondary, backgroundInput, error } =
    useContext(ConfigContext);
  const { bill, setBill, people, setPeople } = useContext(StateContext);

  const value = useMemo(() => {
    if (type === "bill") return bill > 0 ? bill : null;
    if (type === "people") return people > 0 ? people : null;
  }, [type, bill, people]);

  const handleInput = (e) => {
    if (type === "bill") setBill(e.target.value);
    if (type === "people") setPeople(e.target.value);
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
