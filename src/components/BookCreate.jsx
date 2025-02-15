import { useState, useContext } from 'react';
import BooksContext from '../context/books.jsx';

function BookCreate() {
  const { createBook } = useContext(BooksContext);

  const [title, setTitle] = useState('');

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createBook(title);
    setTitle('');
  };

  return (
    <div className="book-create">
      <h3>Add A Book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          placeholder="Enter Book Name"
          value={title}
          onChange={handleChange}
          className="input"
        />
        <button className="button">Create</button>
      </form>
    </div>
  );
}

export default BookCreate;
