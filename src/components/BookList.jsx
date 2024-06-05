import useBooksContext from '../hooks/useBooksContext.js';
import BookShow from './BookShow.jsx';
function BookList() {
  const { book } = useBooksContext();

  return (
    <div className="book-list">
      {book.map((book) => {
        return <BookShow book={book} key={book.id} />;
      })}
    </div>
  );
}

export default BookList;
