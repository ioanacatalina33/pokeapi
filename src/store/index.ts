import {combineReducers} from "redux";
import {pokemonDataReducer} from "./pokemondata/reducers";
import {createStore, applyMiddleware} from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import {appStatesReducer} from "./appstates/reducers";

const rootReducer = combineReducers({
  pokemonStore: pokemonDataReducer,
  appStates: appStatesReducer,
});

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// then run the saga
sagaMiddleware.run(rootSaga);

export {store, rootReducer};
