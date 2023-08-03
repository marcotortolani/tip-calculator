import { createContext } from "preact";
import { useMemo } from "preact/hooks";
import useLocalStorage from "./hooks/useLocalStorage";

const ConfigContext = createContext();

import { data } from "./config.json";

const themeDefault = "light",
  colorDefault = "default";

const ConfigProvider = ({ children }) => {
  const [userConfig, setUserConfig] = useLocalStorage("userConfig", {
    theme: themeDefault,
    color: colorDefault,
  });

  const values = useMemo(() => {
    const color = userConfig.color;
    const theme = userConfig.theme;

    const dataSetted = data[color][theme];
    const colorOptions = Object.keys(data);

    return {
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
