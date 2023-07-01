import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const BookSearch = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const history = useHistory();

    const handleSearch = () => {
        history.push(`/search?query=${searchQuery}`);
    };

    return (
        <div>
            <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};


export default BookSearch;