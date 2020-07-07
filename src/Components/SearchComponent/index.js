import React from 'react';

const SearchName = () =>{
    return(
    <div className="searchComponent">
        <div>
            <input type="text" placeholder="Type a name" />
        </div>
        <div className="buttonDiv">
            <button>Search</button>
        </div> 
    </div>);
}

export default SearchName;