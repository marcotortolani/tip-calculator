import { useContext } from "preact/hooks";
import { ConfigContext } from "../ConfigProvider";

import InputsScreen from "./InputsScreen";
import Display from "./Display";

export default function Calculator() {
  const { backgroundCalc, userConfig } = useContext(ConfigContext);
  return (
    <main
      className="wrapper-calculator"
      style={
        backgroundCalc !== ""
          ? { backgroundColor: backgroundCalc }
          : userConfig.theme === "dark"
          ? { border: "3px solid white" }
          : { border: "3px solid black" }
      }
    >
      <InputsScreen />
      <Display />
    </main>
  );
}
