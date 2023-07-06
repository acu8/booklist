import React, {useState} from 'react'
import BookCreate from './components/BookCreate';

export default function App() {
    const [books, setBooks] = useState([]);

    const createBook = (title) => {
        const updateBooks = [
          ...books,
          { 
            id: Math.round(Math.random * 9999), 
            title }
        ];
        setBooks(updateBooks);
    };

  return (
    <div>
        {books.length}
        <BookCreate onCreate={createBook} />
    </div>
  )
}
