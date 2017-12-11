import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "redux-zero/react";
import registerServiceWorker from "./registerServiceWorker";
import store from "./Store/store";

const Index = () => {
  return <Provider store={store}>
      <App />
    </Provider>;
};

ReactDOM.render(<Index />, document.getElementById("root"));
registerServiceWorker();
