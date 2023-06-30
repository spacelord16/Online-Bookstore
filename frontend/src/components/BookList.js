import React, {useEffect, useState} from "react";
import { getBooks } from '../services/api';

function BookList() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetchBook();
    }, []);

    const fetchBook = async () => {
        try {
            const response = await getBooks();
            setBooks(response.data);
        } catch (error) {
            console.error('Error fetching books: ', error);
        }
    };

    return (
        <div>
            <h2>Book List</h2>
            {/* Display Books */}
            {books.map((book) => (
                <div key={book.id}>
                    <h3>{book.title}</h3>
                </div>
            ))}
        </div>
    );
}

export default BookList;