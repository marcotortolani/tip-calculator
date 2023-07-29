import { createContext } from "preact";
import { useState } from "preact/hooks";

const StateContext = createContext();

const StateProvider = ({ children }) => {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(10);
  const [customTip, setCustomTip] = useState(0);
  const [people, setPeople] = useState(0);

  const values = {
    bill,
    setBill,
    tip,
    setTip,
    customTip,
    setCustomTip,
    people,
    setPeople,
  };

  return (
    <StateContext.Provider value={values}>{children}</StateContext.Provider>
  );
};

export { StateContext, StateProvider };
