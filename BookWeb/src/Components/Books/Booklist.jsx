import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookList = ({ onSelectBook }) => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState('');

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
    onSelectBook(bookId);
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
              <button
                className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => handleSelectBook(book.id)}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
