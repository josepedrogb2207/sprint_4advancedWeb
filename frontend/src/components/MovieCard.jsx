function MovieCard({ data }) {
    return (
        <div style={styles.card}>
            <div style={styles.badge}>Movie</div>
            <h2 style={styles.title}>{data.title}</h2>
            <p style={styles.info}>Genero: {data.genre}</p>
            <p style={styles.info}>Año: {data.year}</p>
        </div>
    );
}

const styles = {
    card: {
        border: "1px solid #e0e0e0",
        borderRadius: "8px",
        padding: "16px",
        margin: "8px",
        width: "200px",
        backgroundColor: "#fff8f0",
        boxShadow: "2px 2px 6px rgba(0,0,0,0.1)"
    },
    badge: {
        fontSize: "12px",
        color: "#e65100",
        marginBottom: "8px"
    },
    title: {
        fontSize: "16px",
        margin: "0 0 8px 0"
    },
    info: {
        fontSize: "14px",
        color: "#555",
        margin: "4px 0"
    }
};

export default MovieCard;