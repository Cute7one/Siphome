import React from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/home";
import Features from "./pages/features";
import Faq from "./pages/Faq";

const App = () => {
  const history = useHistory();
  console.log({ history });
  const name = 'alex'
  return (
    <MainLayout>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/features">
          <Features name={name} />
        </Route> 
        <Route exact path="/faq">
          <Faq name="string" age={23} id={1} />
        </Route>
        <Route>Not found 404</Route>
      </Switch>
    </MainLayout>
  );
};

export default App;
