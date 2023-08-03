import { useState, useContext } from "preact/hooks";
import { ConfigContext } from "../ConfigProvider";

const DropdownSetColor = () => {
  const { backgroundBtn, textBtn, userConfig, setUserConfig, colorOptions } =
    useContext(ConfigContext);
  const [showMenuColor, setShowMenuColor] = useState(false);

  const handleMenuColor = () => {
    setShowMenuColor(!showMenuColor);
  };

  const handleSelectColor = (e) => {
    const selectedOption = e.target.value;
    const theme = userConfig.theme;
    setUserConfig({ theme, color: selectedOption });
    setShowMenuColor(false);
  };

  return (
    <div className="wrapper-set-color">
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
  );
};

export default DropdownSetColor;
