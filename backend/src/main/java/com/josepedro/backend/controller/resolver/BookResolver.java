package com.josepedro.backend.controller.resolver;

import java.util.List;

import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import com.josepedro.backend.model.Book;
import com.josepedro.backend.service.BookService;

@Controller
public class BookResolver {

    private final BookService bookService;

    public BookResolver(BookService bookService) {
        this.bookService = bookService;
    }

    @QueryMapping
    public List<Book> getAllBooks() {
        return bookService.getAllBooks();
    }

    @QueryMapping
    public List<Book> getBooksByAuthor(@Argument String author) {
        return bookService.getBooksByAuthor(author);
    }

    @QueryMapping
    public List<Book> searchBooks(@Argument String keyword) {
        return bookService.searchBooks(keyword);
    }

    @MutationMapping
    public Book createBook(
        @Argument String title,
        @Argument String author,
        @Argument Integer pages
    ) {
        Book book = new Book(title, author, pages);
        return bookService.saveBook(book);
    }
}