import React from "react";
import Home from "./components/Home/Home";
import { AuthContextComponent } from "./contexts/authContext";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AuthRouter from "./routeComponents/auth/AuthRouter";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <AuthContextComponent>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/home" component={Home} />
            <Route path="/auth" component={AuthRouter} />
          </Switch>
        </AuthContextComponent>
      </BrowserRouter>
    </>
  );
}

export default App;
