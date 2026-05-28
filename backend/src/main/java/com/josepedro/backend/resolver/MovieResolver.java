package com.josepedro.backend.resolver;

import java.util.List;

import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import com.josepedro.backend.model.Movie;
import com.josepedro.backend.service.MovieService;

@Controller  
public class MovieResolver {

    private final MovieService movieService;

    public MovieResolver(MovieService movieService) {
        this.movieService = movieService;
    }

    
    @QueryMapping
    public List<Movie> getAllMovies() {
        return movieService.getAllMovies();
    }

    
    @QueryMapping
    public List<Movie> getMoviesByGenre(@Argument String genre) {
        return movieService.getMoviesByGenre(genre);
    }

    @QueryMapping
    public List<Movie> searchMovies(@Argument String keyword) {
        return movieService.searchMovies(keyword);
    }

    
    @MutationMapping
    public Movie createMovie(
        @Argument String title,
        @Argument String genre,
        @Argument Integer year
    ) {
        Movie movie = new Movie(title, genre, year);
        return movieService.saveMovie(movie);
    }
}