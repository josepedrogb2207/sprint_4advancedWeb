import { useState, useEffect } from "react";
import { GraphQLClient } from "graphql-request";

const client = new GraphQLClient("http://localhost:8080/graphql");

function useGraphQL(query, variables = {}) {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const variablesString = JSON.stringify(variables);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const result = await client.request(query, variables);
                setData(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [query, variablesString]);

    return { data, loading, error };
}

export default useGraphQL;