package com.digitalmeanschool.books.service;

import com.digitalmeanschool.books.model.Book;
import com.digitalmeanschool.books.repository.BookRepository;
import com.digitalmeanschool.books.repository.BookSQLRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Service
public class BookService {

    private BookSQLRepository bookRepository;

    public BookService(BookSQLRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public List<Book> getBooks() {
        return bookRepository.findAll();
    }

    public Book getBookById(int id) {
        return bookRepository.findById(id).orElse(null);
    }


    public String createBook(Book bookToCreate) {
        /* if (bookToCreate.getAuthor() == null) {
            return "La demande n'est pas acceptable";
        } */
        if (bookToCreate.getPrice() < 0) {
            return "le Prix n'est acceptable";
        }
        if (bookToCreate.getTitle().isBlank()) {
            return "le Titre n'est acceptable";
        } ///v.....


        // bookToCreate.setId(null);
        bookRepository.save(bookToCreate);

        return  "Book is created";
    }

    public String deleteBook(int bookId) {
        bookRepository.deleteById(bookId);

        return "Book not found";
    }

    public String updateBook(int bookId, Book requestbody) {
        requestbody.setId(bookId);

        bookRepository.save(requestbody);

        return  "Book is update";
    }



}
