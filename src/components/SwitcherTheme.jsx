import { useContext } from "preact/hooks";
import { ConfigContext } from "../ConfigProvider";

const SwitcherTheme = () => {
  const { userConfig, setUserConfig } = useContext(ConfigContext);
  
  const handleChangeTheme = (e) => {
    const color = userConfig.color;
    e.target.checked
      ? setUserConfig({ theme: "light", color })
      : setUserConfig({ theme: "dark", color });
  };
  return (
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
  );
};

export default SwitcherTheme;
