import { useState } from 'react';
import useBooksContext from '../hooks/useBooksContext.js';

function BookEdit({ book, toggleForm }) {
  const { editBook } = useBooksContext();

  const [title, setTitle] = useState(book.title);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    editBook(book.id, title);
    toggleForm();
  };

  return (
    <form onSubmit={handleSubmit} className="book-edit">
      <label>Title</label>
      <input
        type="text"
        className="input"
        value={title}
        onChange={handleChange}
      />
      <button className="button is-primary">Save</button>
    </form>
  );
}

export default BookEdit;
