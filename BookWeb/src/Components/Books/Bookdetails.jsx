import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookDetails = ({ bookId, onClose }) => {
  const [book, setBook] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const bookResponse = await axios.get(`http://localhost:5174/books/${bookId}`);
        const reviewsResponse = await axios.get(`http://localhost:5174/books/${bookId}/reviews`);

        setBook(bookResponse.data);
        setReviews(reviewsResponse.data);
      } catch (error) {
        setError('Failed to fetch book details and reviews.');
      }
    };

    if (bookId) {
      fetchBookDetails();
    }
  }, [bookId]);

  const handleClose = () => {
    onClose();
  };

  if (error) {
    return (
      <div className="container mx-auto px-6 py-16 text-center">
        <p className="text-red-500">{error}</p>
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleClose}
        >
          Close
        </button>
      </div>
    );
  }

  if (!book) {
    return (
      <div className="container mx-auto px-6 py-16 text-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-4">
      <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="px-6 py-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{book.title}</h2>
          <p className="text-gray-700">{book.author}</p>
          <p className="text-gray-700">{book.description}</p>
        </div>
        <div className="px-6 py-4">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Reviews</h3>
          {reviews.length === 0 && <p>No reviews available.</p>}
          {reviews.map(review => (
            <div key={review.id} className="bg-gray-100 rounded-lg p-4 mt-2">
              <p className="text-gray-700">{review.content}</p>
              <p className="text-gray-500">Rating: {review.rating}/5</p>
            </div>
          ))}
        </div>
        <div className="px-6 py-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
