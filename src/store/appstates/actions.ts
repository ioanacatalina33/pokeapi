import {SEARCH_QUERY} from "./types";

export function setSearchQuery(query: string) {
  return {type: SEARCH_QUERY, query};
}
