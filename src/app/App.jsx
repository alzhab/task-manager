import React from "react";
import { Switch, Route } from "react-router-dom";
import { Main } from "./routes";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Main} />
      </Switch>
    </div>
  );
}

export default App;
