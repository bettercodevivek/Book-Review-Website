import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookList = ({ onSelectBook }) => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState('');
  const [selectedBookId, setSelectedBookId] = useState(null); // Track selected book id for details

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:5174/books');
        setBooks(response.data);
      } catch (error) {
        setError('Failed to fetch books.');
      }
    };

    fetchBooks();
  }, []);

  const handleSelectBook = (bookId) => {
    // Toggle selected book id for details display
    setSelectedBookId(selectedBookId === bookId ? null : bookId);
    onSelectBook(bookId); // Call parent function if needed
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<span key={i} className="text-yellow-400">&#9733;</span>);
      } else {
        stars.push(<span key={i} className="text-gray-300">&#9733;</span>);
      }
    }
    return stars;
  };

  if (error) {
    return (
      <div className="container mx-auto px-6 py-16 text-center">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">List of Books</h2>
      {books.length === 0 && <p>No books available.</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {books.map(book => (
          <div key={book.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="px-6 py-4">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{book.title}</h3>
              <p className="text-gray-700">{book.author}</p>
              {selectedBookId === book.id && ( // Display description and reviews if selectedBookId matches book.id
                <>
                  <p className="text-gray-700 mt-2">{book.description}</p>
                  <div className="mt-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Reviews:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {book.reviews.map(review => (
                        <div key={review.id} className="bg-gray-100 rounded-lg p-4">
                          <p className="text-gray-700">{review.content}</p>
                          <div className="flex mt-2">
                            <span className="text-gray-600 mr-1">Rating:</span>
                            <div className="flex">
                              {renderStars(review.rating)}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
              <button
                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => handleSelectBook(book.id)}
              >
                {selectedBookId === book.id ? 'Hide Details' : 'View Details'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
