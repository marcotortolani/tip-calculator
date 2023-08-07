import { createContext } from "preact";
import { useReducer } from "preact/hooks";

const StateContext = createContext();

const calcReducer = (state, action) => {
  switch (action?.type) {
    case "ADD_BILL":
      return { ...state, bill: action.bill };
    case "SELECT_TIP":
      return { ...state, tip: action.tip, customTip: 0 };
    case "CUSTOM_TIP":
      return { ...state, tip: action.tip, customTip: action.customTip };
    case "ADD_PEOPLE":
      return { ...state, people: action.people };
    case "RESET":
      return { ...state, bill: 0, tip: 10, customTip: 0, people: 0 };
  }
};

const initialState = {
  bill: 0,
  tip: 10,
  customTip: 0,
  people: 0,
};

const StateProvider = ({ children }) => {
  const [calcState, dispatch] = useReducer(calcReducer, initialState);

  const values = {
    calcState,
    dispatch,
  };

  return (
    <StateContext.Provider value={values}>
      {Object.keys(values).length !== 0 ? children : "Loading..."}
    </StateContext.Provider>
  );
};

export { StateContext, StateProvider };
