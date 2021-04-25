import SearchResult from "./searchResult";
import { SearchContextConsumer } from "../../Contexts/SearchContext";
function SearchResults(props) {
  return (
    <SearchContextConsumer>
      {({searchResults,searchItemClick}) => {
        return (
          <div className="searchResultsContainer">
            <ul className="searchResultsList">
              {searchResults.map((result, index) => (
                <li
                  onClick={(e) => {
                    searchItemClick(result.id, e);
                  }}
                  key={index}
                >
                  <SearchResult result={result} />
                </li>
              ))}
            </ul>
          </div>
        );
      }}
    </SearchContextConsumer>
  );
}

export default SearchResults;
