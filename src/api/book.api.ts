import { Book } from "../model/book.model";

const BACKEND_URL = 'http://localhost:8080/api/v1/books'; // meta vite

export const getBooks = async (): Promise<Book[]> => {
    const response = await fetch(BACKEND_URL);
    const data = await response.json();
    return data;
}