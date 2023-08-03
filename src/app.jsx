import "./app.scss";
import { useContext, useState } from "preact/hooks";
import { StateProvider } from "./StateProvider.jsx";
import Attribution from "./components/Attribution";
import Calculator from "./components/Calculator";
import { ConfigContext } from "./ConfigProvider";

export function App() {
  const {
    backgroundApp,
    backgroundBtn,
    primaryTitle,
    textBtn,
    userConfig,
    setUserConfig,
    colorOptions,
  } = useContext(ConfigContext);
  const [showMenuColor, setShowMenuColor] = useState(false);

  const handleChangeTheme = (e) => {
    const color = userConfig.color;
    e.target.checked
      ? setUserConfig({ theme: "light", color })
      : setUserConfig({ theme: "dark", color });
  };

  const handleMenuColor = () => {
    showMenuColor ? setShowMenuColor(false) : setShowMenuColor(true);
  };

  const handleSelectColor = (e) => {
    const selectedOption = e.target.value;
    const theme = userConfig.theme;

    setUserConfig({ theme, color: selectedOption });
    setShowMenuColor(false);
  };

  return (
    <div className="App" style={{ backgroundColor: backgroundApp }}>
      <header>
        <div className="wrapper-switch-theme">
          <label className="switch">
            <input
              type="checkbox"
              checked={userConfig.theme === "light" ? true : false}
              onChange={(e) => handleChangeTheme(e)}
            />
            <div>
              <span></span>
            </div>
          </label>
        </div>
        <h1 className="app-title" style={{ color: primaryTitle }}>
          Tip Calculator
        </h1>
        <div className="wrapper-set-color">
          {/* <h2>Set Color</h2> */}
          <div
            className={`dropdown ${showMenuColor ? "active" : "hide"}`}
            style={{ borderColor: textBtn }}
          >
            <input
              onClick={handleMenuColor}
              style={{ color: textBtn, background: backgroundBtn }}
              className="textBox"
              type="text"
              readOnly
              placeholder=""
              value={userConfig.color}
            />
            <div
              className="options"
              style={{ color: textBtn, background: backgroundBtn }}
            >
              {colorOptions.map((colorOpt, index) => {
                return (
                  <button
                    key={index}
                    className="btn-option"
                    style={{ color: textBtn, background: backgroundBtn }}
                    onClick={(e) => handleSelectColor(e)}
                    value={colorOpt}
                  >
                    {colorOpt}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </header>

      <StateProvider>
        <Calculator />
        <Attribution />
      </StateProvider>
    </div>
  );
}
