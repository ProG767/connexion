package com.digitalmeanschool.books.repository;

import com.digitalmeanschool.books.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Repository
public interface BookSQLRepository extends JpaRepository<Book, Integer> {


}
