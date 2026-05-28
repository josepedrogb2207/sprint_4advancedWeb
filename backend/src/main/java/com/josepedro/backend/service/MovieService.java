package com.josepedro.backend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.josepedro.backend.model.Movie;
import com.josepedro.backend.repository.MovieRepository;

@Service  
public class MovieService {

    
    private final MovieRepository movieRepository;

    
    public MovieService(MovieRepository movieRepository) {
        this.movieRepository = movieRepository;
    }

    
    public List<Movie> getAllMovies() {
        return movieRepository.findAll();
    }

    
    public List<Movie> getMoviesByGenre(String genre) {
        if (genre == null || genre.isEmpty()) {
            return movieRepository.findAll();
        }
        return movieRepository.findByGenre(genre);
    }

    
    public List<Movie> searchMovies(String keyword) {
        return movieRepository.findByTitleContainingIgnoreCase(keyword);
    }

    
    public Movie saveMovie(Movie movie) {
        return movieRepository.save(movie);
    }
}