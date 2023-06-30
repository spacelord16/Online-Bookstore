import React, { useState } from "react";
import { useHistory } from 'react-router-dom';

function FilterOptions() {
    const [genre, setGenre] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const history = useHistory();
    
    const handleFilter = (e) => {
        e.preventDefault();

        const queryParams = new URLSearchParams();
        if (genre) queryParams.set('genre', genre);
        if (minPrice) queryParams.set('min_price', minPrice);
        if (maxPrice) queryParams.set('max_price', maxPrice);

        const queryString = queryParams.toString();
        history.push(`/filter?${queryString}`);
    };

    return (
        <form onSubmit={handleFilter}>
            <select value={genre} onChange={(e) => setGenre(e.target.value)}>
                <option value="">All Genres</option>
                <option value="fantasy">Fantasy</option>
                <option value="romance">Romance</option>
                <option value="fiction">Fiction</option>
                <option value="novel">Novel</option>
                <option value="science fiction">Science Fiction</option>

            </select>
            <input
                type="number"
                placeholder="Min Price"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
            />
            <input
                type="number"
                placeholder="Max Price"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
            />
            <button type="submit">Filter</button>
        </form>
    );
}

export default FilterOptions;