import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Elements from "./Components/Elements";
import Generic from "./Components/Generic";
import Home from "./Components/Home";

const Routes = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/generic" component={Generic} />
          <Route exact path="/element" component={Elements}/>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Routes;
