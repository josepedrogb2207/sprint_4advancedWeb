import MovieCard from "./MovieCard";
import BookCard from "./BookCard";


const cardTypes = {
    movie: MovieCard,
    book: BookCard,
};

function CardFactory({ type, data }) {
    
    const Component = cardTypes[type];

    if (!Component) {
        return <div>Tipo desconocido: {type}</div>;
    }    
    return <Component data={data} />;
}

export default CardFactory;