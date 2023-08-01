import "./app.scss";
import { useContext, useState } from "preact/hooks";
import { StateProvider } from "./StateProvider.jsx";
import Attribution from "./components/Attribution";
import Calculator from "./components/Calculator";
import { ConfigContext } from "./ConfigProvider";



export function App() {
  const {
    backgroundApp,
    primaryTitle,
    theme,
    setTheme,
    color,
    setColor,
    colorOptions,
  } = useContext(ConfigContext);

  const handleChangeTheme = (e) => {
    e.target.checked ? setTheme("light") : setTheme("dark");
  };

  const handleSelectColor = (e) => {
    const selectedOption = e.target.value;
    
    setColor(selectedOption);
  };

  return (
    <div className="App" style={{ backgroundColor: backgroundApp }}>
      <header>
        <div className="wrapper-switch-theme">
          <label className="switch">
            <input
              type="checkbox"
              checked={theme === "light" ? true : false}
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
          <div className="select-menu horizontal chang">
            <select data-menu="horizontal" onChange={handleSelectColor}>
              {colorOptions.map((colorOpt, index) => {
                return (
                  <option
                    key={index}
                    selected={colorOpt === color ? true : false}
                  >
                    {colorOpt}
                  </option>
                );
              })}
            </select>
            {/* <button onClick={handleSelectColor} style="--h: 19px; --w: 64px;">
              <em></em>
              <div>
                <span className="">{color}</span>
              </div>
            </button> */}

            
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
