import SearchResult from "./searchResult";
import { useHistory } from "react-router";

function SearchResults({results, resetSearch}) {
  const history = useHistory();
  return (
          <div className="searchResultsContainer">
            <ul className="searchResultsList">
              {results.slice(0,6).map((result, index) => (
                <li
                  onClick={(e) => {
                    history.push(`/product/${result.id}`);
                    resetSearch();
                  }}
                  key={index}
                >
                  <SearchResult result={result} />
                </li>
              ))}
            </ul>
          </div>
        );
}

export default SearchResults;
