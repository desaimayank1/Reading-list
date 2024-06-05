import useBooksContext from '../hooks/useBooksContext.js';
import { useState } from 'react';
import BookEdit from './BookEdit.jsx';

function BookShow({ book }) {
  const { deleteBook } = useBooksContext();

  const [showEdit, setShowEdit] = useState(false);

  const handleOnDelete = () => {
    deleteBook(book.id);
  };

  const handleEdit = () => {
    setShowEdit(!showEdit);
  };

  let content = <h3>{book.title}</h3>;
  if (showEdit) content = <BookEdit toggleForm={handleEdit} book={book} />;

  return (
    <div className="book-show">
      <img
        alt="book"
        src={`https://picsum.photos/seed/${book.title}/300/200`}
      />
      <div>{content}</div>
      <div className="actions">
        <button onClick={handleEdit} className="edit">
          Edit
        </button>
        <button onClick={handleOnDelete} className="delete">
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
