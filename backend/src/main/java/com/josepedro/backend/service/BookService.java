package com.josepedro.backend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.josepedro.backend.model.Book;
import com.josepedro.backend.repository.BookRepository;

@Service
public class BookService {

    private final BookRepository bookRepository;

    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    
    public List<Book> getBooksByAuthor(String author) {
        if (author == null || author.isEmpty()) {
            return bookRepository.findAll();
        }
        return bookRepository.findByAuthor(author);
    }

    
    public List<Book> searchBooks(String keyword) {
        return bookRepository.findByTitleContainingIgnoreCase(keyword);
    }

    
    public Book saveBook(Book book) {
        return bookRepository.save(book);
    }
}