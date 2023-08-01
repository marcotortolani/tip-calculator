import { createContext } from "preact";
import { useState, useMemo } from "preact/hooks";

const ConfigContext = createContext();

import { data } from "./config.json";
//console.log(data["default"]["light"]);


let dataSetted, values;

const ConfigProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const [color, setColor] = useState("default");

  useMemo(() => {
    dataSetted = data[color][theme];
    const colorOptions = Object.keys(data);
    values = {...dataSetted, theme, setTheme, color, setColor, colorOptions}
  }, [data, color, theme]);


  return (
    <ConfigContext.Provider value={values}>
      {values ? children : null}
    </ConfigContext.Provider>
  );
};

export { ConfigContext, ConfigProvider };
