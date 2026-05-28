import { useState } from "react";
import useGraphQL from "./hooks/useGraphQL";
import CardFactory from "./components/CardFactory";
import { GET_ALL_MOVIES, GET_MOVIES_BY_GENRE } from "./queries/movieQueries";
import { GET_ALL_BOOKS, GET_BOOKS_BY_AUTHOR } from "./queries/bookQueries";

function App() {

    const [contentType, setContentType] = useState("movies");
    const [filter, setFilter] = useState("");

    const moviesResult = useGraphQL(
        filter ? GET_MOVIES_BY_GENRE : GET_ALL_MOVIES,
        filter ? { genre: filter } : {}
    );

    const booksResult = useGraphQL(
        filter ? GET_BOOKS_BY_AUTHOR : GET_ALL_BOOKS,
        filter ? { author: filter } : {}
    );

    const { data, loading, error } = contentType === "movies"
        ? moviesResult
        : booksResult;

    const items = data ? Object.values(data)[0] : [];

    const handleContentChange = (type) => {
        setContentType(type);
        setFilter("");
    };

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    return (
        <div style={styles.app}>
            <h1 style={styles.title}>Sprint 4 Web Avanzado GraphQL </h1>

            <div style={styles.controls}>
                <button
                    style={contentType === "movies" ? styles.activeBtn : styles.btn}
                    onClick={() => handleContentChange("movies")}
                >
                    Movies
                </button>
                <button
                    style={contentType === "books" ? styles.activeBtn : styles.btn}
                    onClick={() => handleContentChange("books")}
                >
                    Books
                </button>
            </div>

            <div style={styles.filterContainer}>
                <input
                    style={styles.input}
                    type="text"
                    placeholder={
                        contentType === "movies"
                            ? "Filtrar por genero (Sci-Fi, Terror, Action...)"
                            : "Filtrar por autor..."
                    }
                    value={filter}
                    onChange={handleFilterChange}
                />
            </div>

            {loading && <p style={styles.message}>Cargando...</p>}
            {error   && <p style={styles.error}>Error: {error}</p>}

            <div style={styles.grid}>
                {items && items.map((item) => (
                    <CardFactory
                        key={item.id}
                        type={contentType === "movies" ? "movie" : "book"}
                        data={item}
                    />
                ))}
            </div>
        </div>
    );
}

const styles = {
    app: {
        fontFamily: "sans-serif",
        maxWidth: "900px",
        margin: "0 auto",
        padding: "24px"
    },
    title: {
        textAlign: "center",
        color: "#333"
    },
    controls: {
        display: "flex",
        gap: "8px",
        justifyContent: "center",
        marginBottom: "16px"
    },
    btn: {
        padding: "8px 20px",
        borderRadius: "6px",
        border: "1px solid #ccc",
        cursor: "pointer",
        backgroundColor: "#fff"
    },
    activeBtn: {
        padding: "8px 20px",
        borderRadius: "6px",
        border: "1px solid #1a237e",
        cursor: "pointer",
        backgroundColor: "#1a237e",
        color: "#fff"
    },
    filterContainer: {
        display: "flex",
        justifyContent: "center",
        marginBottom: "24px"
    },
    input: {
        padding: "10px",
        width: "400px",
        borderRadius: "6px",
        border: "1px solid #ccc",
        fontSize: "14px"
    },
    grid: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center"
    },
    message: {
        textAlign: "center",
        color: "#888"
    },
    error: {
        textAlign: "center",
        color: "red"
    }
};

export default App;