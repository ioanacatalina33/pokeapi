import {SearchQueryAction, SEARCH_QUERY} from "./types";

export function setSearchQuery(query: string): SearchQueryAction {
  return {type: SEARCH_QUERY, query};
}
