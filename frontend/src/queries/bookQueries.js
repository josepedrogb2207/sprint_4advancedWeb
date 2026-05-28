import { gql } from "graphql-request";

export const GET_ALL_BOOKS = gql`
    query {
        getAllBooks {
            id
            title
            author
            pages
        }
    }
`;

export const GET_BOOKS_BY_AUTHOR = gql`
    query GetBooksByAuthor($author: String) {
        getBooksByAuthor(author: $author) {
            id
            title
            author
            pages
        }
    }
`;

export const SEARCH_BOOKS = gql`
    query SearchBooks($keyword: String!) {
        searchBooks(keyword: $keyword) {
            id
            title
            author
            pages
        }
    }
`;