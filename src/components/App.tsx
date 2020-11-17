import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {PATH_LIST, PATH_PROFILE, PATH_PROFILE_NAME} from "../utils/Constants";
import NotFound from "./notfound";
import PokeList from "./pokelist";
import PokeProfile from "./profile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">Pokemon Api</header>
        <Switch>
          <Route exact path={PATH_LIST}>
            <PokeList />
          </Route>
          <Route exact path={PATH_PROFILE + "/:" + PATH_PROFILE_NAME}>
            <PokeProfile />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
