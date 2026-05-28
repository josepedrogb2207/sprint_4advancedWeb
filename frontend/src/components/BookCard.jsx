function BookCard({ data }) {
    return (
        <div style={styles.card}>
            <div style={styles.badge}>Book</div>
            <h2 style={styles.title}>{data.title}</h2>
            <p style={styles.info}>Autor: {data.author}</p>
            <p style={styles.info}>Páginas: {data.pages}</p>
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
        backgroundColor: "#f0f4ff",
        boxShadow: "2px 2px 6px rgba(0,0,0,0.1)"
    },
    badge: {
        fontSize: "12px",
        color: "#1a237e",
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

export default BookCard;