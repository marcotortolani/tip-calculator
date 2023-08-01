import { createContext } from "preact";
import { useMemo } from "preact/hooks";
import useLocalStorage from "./hooks/useLocalStorage";

const ConfigContext = createContext();

import { data } from "./config.json";

let dataSetted, values;
const themeDefault = "light",
  colorDefault = "default";

const ConfigProvider = ({ children }) => {
  //const [userTheme, setUserTheme] = useLocalStorage("userTheme", themeDefault);
  //const [userColor, setUserColor] = useLocalStorage("userColor", colorDefault);
  const [userConfig, setUserConfig] = useLocalStorage("userConfig", {
    theme: themeDefault,
    color: colorDefault,
  });

  useMemo(() => {
    const color = userConfig.color;
    const theme = userConfig.theme;

    dataSetted = data[color][theme];
    const colorOptions = Object.keys(data);
    values = {
      ...dataSetted,
      userConfig,
      setUserConfig,
      colorOptions,
    };
  }, [data, userConfig]);

  return (
    <ConfigContext.Provider value={values}>
      {values ? children : null}
    </ConfigContext.Provider>
  );
};

export { ConfigContext, ConfigProvider };
