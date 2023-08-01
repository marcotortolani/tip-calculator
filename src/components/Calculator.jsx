import { useContext } from "preact/hooks";
import { ConfigContext } from "../ConfigProvider";

import Inputs from "./Inputs";
import Display from "./Display";

export default function Calculator() {
  const { backgroundCalc } = useContext(ConfigContext);
  return (
    <main
      className="wrapper-calculator"
      style={{ backgroundColor: backgroundCalc }}
    >
      <Inputs />
      <Display />
    </main>
  );
}
