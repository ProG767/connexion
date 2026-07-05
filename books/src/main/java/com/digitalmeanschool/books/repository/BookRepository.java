package com.digitalmeanschool.books.repository;

import com.digitalmeanschool.books.model.Book;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BookRepository {

    List<Book> books = new ArrayList<>(List.of(
            new Book(1, "Le Petit Prince", "Roman", 9.99,
                    "L'histoire d'un petit garçon venu d'une autre planète.", null),

            new Book(2, "Mastery", "Développement personnel", 39.99,
                    "Développer une expertise grâce à la pratique.", null),

            new Book(3, "Clean Code", "Programmation", 42.90,
                    "Les bonnes pratiques pour écrire un code propre.", null),

            new Book(4, "Effective Java", "Programmation", 54.90,
                    "Les meilleures pratiques pour développer en Java.", null),

            new Book(5, "Design Patterns", "Programmation", 49.90,
                    "Les principaux patrons de conception orientée objet.", null),

            new Book(6, "Atomic Habits", "Développement personnel", 18.50,
                    "Créer de bonnes habitudes et supprimer les mauvaises.", null),

            new Book(7, "The Pragmatic Programmer", "Programmation", 45.00,
                    "Conseils pratiques pour devenir un meilleur développeur.", null),

            new Book(8, "Deep Work", "Productivité", 21.90,
                    "Apprendre à travailler avec une concentration maximale.", null),

            new Book(9, "1984", "Roman", 12.50,
                    "Le célèbre roman dystopique de George Orwell.", null),

            new Book(10, "L'Alchimiste", "Roman", 11.90,
                    "Le voyage initiatique d'un jeune berger.", null),

            new Book(11, "Sapiens", "Histoire", 24.90,
                    "Une brève histoire de l'humanité.", null),

            new Book(12, "Spring in Action", "Programmation", 52.90,
                    "Guide complet du framework Spring.", null),

            new Book(13, "Refactoring", "Programmation", 47.90,
                    "Améliorer la conception du code existant.", null),

            new Book(14, "Thinking, Fast and Slow", "Psychologie", 19.90,
                    "Comprendre les deux systèmes de pensée.", null),

            new Book(15, "Le Comte de Monte-Cristo", "Roman", 15.90,
                    "Le classique d'Alexandre Dumas.", null)
    ));


    public List<Book> getBooks() {
        return books;
    }

    public Book getBookById(int id) {
        for (var book: books) {
            if (book.getId() == id) {
                return book;
            }
        }

        return null;
    }

    public void createBook(Book bookToCreate) {
    }

    public void deleteBook(int bookId) {
        Book bookToDelete = null;
        for (var book: books) {
            if (book.getId() == bookId) {
                bookToDelete = book;
            }
        }

        if (bookToDelete != null) {
            books.remove(bookToDelete);
        }
    }

    public void updateBook(int bookId, Book requestbody) {
        Book currentBook = null;

        for (var b: books) {
            if (b.getId() == bookId) {
                currentBook = b;
            }
        }

        if (currentBook == null) {
            return;
        }

        currentBook.setAuthor(requestbody.getAuthor());
        currentBook.setTitle(requestbody.getTitle());
        currentBook.setDescription(requestbody.getDescription());
        currentBook.setCategory(requestbody.getCategory());
        currentBook.setPrice(requestbody.getPrice());
    }
}
