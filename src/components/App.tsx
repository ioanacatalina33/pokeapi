import React, {useEffect} from "react";
import {Switch, Route, useLocation} from "react-router-dom";
import {PATH_LIST, PATH_PROFILE, PATH_PROFILE_NAME} from "../utils/Constants";
import Footer from "./footer";
import Header from "./header";
import ListPage from "./listpage";
import NotFound from "./NotFound";
import PokeProfile from "./profilepage";
import {useDispatch} from "react-redux";
import {fetchPokemons} from "../store/pokemondata/actions";

function App() {
  //we call to fetch the photos only once at the top element when first rendered
  const dispatch = useDispatch();
  const {pathname} = useLocation();

  useEffect(() => {
    dispatch(fetchPokemons());
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path={PATH_LIST}>
          <ListPage />
        </Route>
        <Route exact path={PATH_PROFILE + "/:" + PATH_PROFILE_NAME}>
          <PokeProfile />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
