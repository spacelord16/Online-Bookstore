import React, { useState } from "react";
import { useHistory } from 'react-router-dom';

function SearchBar() {
    const [searchQuery, setSearchQuery] = useState('');
    const history = useHistory();

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`/search?q=${searchQuery}`);
    };

    return(
        <form onSubmit={handleSearch}>
            <input
                type = "text"
                placeholder="Search Books..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}            
                
            />
            <button type="submit"></button>
        </form>
    )
}

export default SearchBar;