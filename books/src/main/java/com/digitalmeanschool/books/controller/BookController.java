package com.digitalmeanschool.books.controller;

import com.digitalmeanschool.books.service.BookService;
import org.springframework.web.bind.annotation.*;


import com.digitalmeanschool.books.model.Book;

import java.util.List;

@RequestMapping("/api/v1")
@RestController
public class BookController { // controlller -> service -> DAO /DAL (Data access Layer)

    private BookService bookService;

    public BookController(BookService bookService) {
        this.bookService = bookService;

    }

    @GetMapping("/books")
    public List<Book> getBooks() {
        return bookService.getBooks();
    }

    @GetMapping("/books/{bookId}")  //   /users/:id
    public Book getBookById(@PathVariable("bookId") int id) {
        return bookService.getBookById(id);
    }

    @PostMapping("/books")
    public String createBook(@RequestBody Book bookToCreate) {
        return bookService.createBook(bookToCreate);
    }

    @DeleteMapping("/books/{bookId}")
    public String deleteBook(@PathVariable("bookId") int bookId) {
        bookService.deleteBook(bookId);

        return "Book is deleted";
    }

    @PutMapping("/books/{bookId}")
    public String updateBook(@PathVariable("bookId") int bookId,
                             @RequestBody Book requestbody) {

        bookService.updateBook(bookId, requestbody);

        return  "Book is update";
    }

}


