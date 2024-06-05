import { createContext, useState } from 'react';
import axios from 'axios';

const BooksContext = createContext();

function Provider({ children }) {
  const [book, setBook] = useState([]);

  // reload after refresh
  const fetchBooks = async () => {
    const reponse = await axios.get('http://localhost:3001/books');
    setBook(reponse.data);
  };

  //create a book
  const createBook = async (bookTitle) => {
    //check if book exist
    const alreadyExist = book.find((book) => {
      return book.title.toLowerCase() === bookTitle.toLowerCase();
    });

    if (alreadyExist) return;

    //store book in DB
    const response = await axios.post('http://localhost:3001/books', {
      title: bookTitle,
    });

    const updatedBooks = [...book, response.data];
    setBook(updatedBooks);
  };

  //delete a book
  const deleteBook = async (bookId) => {
    await axios.delete(`http://localhost:3001/books/${bookId}`);

    const updatedBook = book.filter((book) => {
      return bookId !== book.id;
    });
    setBook(updatedBook);
  };

  //Edit book
  const editBook = async (bookId, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${bookId}`, {
      title: newTitle,
    });

    const updatedBooks = book.map((book) => {
      if (book.id !== bookId) {
        return book;
      }
      return { ...book, ...response.data };
    });

    setBook(updatedBooks);
  };

  const valueToShare = {
    book,
    fetchBooks,
    createBook,
    deleteBook,
    editBook,
  };

  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}

export { Provider };
export default BooksContext;
