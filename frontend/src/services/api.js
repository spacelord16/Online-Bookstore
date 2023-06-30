import axios from "axios";

const BASE_URL = 'http://localhost:8000/api';

export const getBooks = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/books/`);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch books');
    }

};

export const getBook = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/books/${id}/`);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch book');
    }
};

export const searchBooks = async (query) => {
    try {
        const response = await axios.get(`${BASE_URL}/books/search/?q=${query}`);
        return response.data;
    } catch (error) {
        throw new Error('Failed to search books');
    }
};

export const filterBooks = async (genre, minPrice, maxPrice) => {
    try {
        const params = {
            genre: genre || '',
            min_price: minPrice || '',
            max_price: maxPrice || '',
        };
        const response = await axios.get(`${BASE_URL}/books/filters/`, {params});
        return response.data;   
    } catch (error) {
        throw new Error('Failed to filter books');
    }
};


export default {
    getBooks,
    getBook,
    searchBooks,
    filterBooks
};