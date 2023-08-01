import { render } from "preact";
import { App } from "./app.jsx";

import "./index.css";
import { ConfigProvider } from "./ConfigProvider.jsx";

const app = (
  <ConfigProvider>
    <App />
  </ConfigProvider>
);

render(app, document.getElementById("app"));
//render(<App />, document.getElementById('app')!)
