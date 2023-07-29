import "./app.scss";
import { StateProvider } from "./StateProvider.jsx";
import Attribution from "./components/Attribution";
import Calculator from "./components/Calculator";

export function App() {
  return (
    <div className="App">
      <h1 className="app-title">Tip Calculator</h1>
      <StateProvider>
        <Calculator />
        <Attribution />
      </StateProvider>
    </div>
  );
}
