import { gql } from "graphql-request";

export const GET_ALL_MOVIES = gql`
    query {
        getAllMovies {
            id
            title
            genre
            year
        }
    }
`;

export const GET_MOVIES_BY_GENRE = gql`
    query GetMoviesByGenre($genre: String) {
        getMoviesByGenre(genre: $genre) {
            id
            title
            genre
            year
        }
    }
`;

export const SEARCH_MOVIES = gql`
    query SearchMovies($keyword: String!) {
        searchMovies(keyword: $keyword) {
            id
            title
            genre
            year
        }
    }
`;