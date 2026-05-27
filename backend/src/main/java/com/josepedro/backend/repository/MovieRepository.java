package com.josepedro.backend.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.josepedro.backend.model.Movie;

@Repository 
public interface MovieRepository extends JpaRepository<Movie, Long> {

      List<Movie> findByGenre(String genre);

    
    List<Movie> findByTitleContainingIgnoreCase(String keyword);
}