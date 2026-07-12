import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { useEffect, useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  decrementBy10,
  increment,
  incrementBy10,
} from "./store/counterSlice";
import { getBooks } from "./api/book.api";
import Button from "./components/Button";
import { Book } from "./model/book.model";

function App() {
  const [books, setBooks] = useState<Book[]>([]);

  const onCallApi = async () => {
    const data = await getBooks();
    setBooks(data);
  };

  return (
    <div>
      counter:
      <Button onClick={onCallApi} label="Appel api"></Button>
      {books.map((book) => (
        <h1 key={book.id}>{book.title}</h1>
      ))}
    </div>
  );
}

export default App;
