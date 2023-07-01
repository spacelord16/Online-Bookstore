import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BookDetails = () => {
    const { id } = useParams();
    const [book, setBook] = useState(null);


    useEffect(() => {
        const fetchBookDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/books/${id}/`);
                setBook(response.data);
            } catch (error) {
                console.error('Failed to fetch book details:', error);
            }
        };

        fetchBookDetails();

    }, [id]);

    if (!book) {
        return <div>Loading book details...</div>
    }

    return (
        <div>
            <h2>{book.title}</h2>
            <p>Author: {book.author}</p>
            <p>Description: {book.description}</p>

        </div>
    )
};

export default BookDetails;