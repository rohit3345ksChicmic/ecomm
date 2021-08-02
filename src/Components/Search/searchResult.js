function searchResult({result,searchItemClick}){
    return (
        <div className="searchedProduct">
                <div className="imageContainer">
                    <img src={`http://${result.imageUrl}`} alt={result.name} />
                </div>
                <div className="titleContainer">
                    <p className="searchResultTitle">
                        {result.name.slice(0,30)+". . ."}
                    </p>
                </div>
        </div>
    )
}

export default searchResult;