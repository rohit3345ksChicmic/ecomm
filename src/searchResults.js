import SearchResult from './searchResult';

function SearchResults(props) {
    return(
        <div className="searchResultsContainer">
            <ul className="searchResultsList">
                {props.results.map((result,index)=><li onClick={(e)=>{
                    props.searchItemClick(result,e);
                    
                }
            } key={index}><SearchResult 
                result={result} /></li>)}
            </ul>
        </div>
    )
}

export default SearchResults;