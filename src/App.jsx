import { useEffect } from 'react';
import BookCreate from './components/BookCreate.jsx';
import BookList from './components/BookList.jsx';
import useBooksContext from './hooks/useBooksContext.js';

function App() {
  const { fetchBooks } = useBooksContext();
  // console.log(value);

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="app">
      <h1>READING LIST</h1>
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;
