import {
  AppStates,
  AppStatesAction,
  DEFAULT_LIMIT,
  INCREMENT_CARDS_LIMIT,
  LIMIT_INCREMENT,
  RESET_CARDS_LIMIT,
  SEARCH_QUERY,
} from "./types";

const initialState: AppStates = {
  cardsLimit: DEFAULT_LIMIT,
  query: "",
};

export function appStatesReducer(
  state = initialState,
  action: AppStatesAction
): AppStates {
  switch (action.type) {
    case INCREMENT_CARDS_LIMIT: {
      return {
        ...state,
        cardsLimit: state.cardsLimit + LIMIT_INCREMENT,
      };
    }
    case RESET_CARDS_LIMIT: {
      return {
        ...state,
        cardsLimit: LIMIT_INCREMENT,
      };
    }
    case SEARCH_QUERY: {
      return {
        ...state,
        query: action.query,
      };
    }
    default:
      return state;
  }
}
