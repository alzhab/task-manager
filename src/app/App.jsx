import React from "react";
import { Switch, Route } from "react-router-dom";
import { Main, Authorization } from "./routes";

import "materialize-css/dist/css/materialize.min.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/sign-in" component={Authorization} />
      </Switch>
    </div>
  );
}

export default App;
