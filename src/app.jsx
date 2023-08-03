import "./app.scss";
import { useContext } from "preact/hooks";
import { StateProvider } from "./StateProvider.jsx";
import { ConfigContext } from "./ConfigProvider";

import SwitcherTheme from "./components/SwitcherTheme";
import DropdownSetColor from "./components/DropdownSetColor";
import Attribution from "./components/Attribution";
import Calculator from "./components/Calculator";

export function App() {
  const {
    backgroundApp,
    primaryTitle,
  } = useContext(ConfigContext);

  return (
    <div className="App" style={{ backgroundColor: backgroundApp }}>
      <header>
        <SwitcherTheme />
        <h1 className="app-title" style={{ color: primaryTitle }}>
          Tip Calculator
        </h1>
        <DropdownSetColor />
      </header>

      <StateProvider>
        <Calculator />
        <Attribution />
      </StateProvider>
    </div>
  );
}
