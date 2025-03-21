import React, { useState, useEffect } from 'react'

export const DataFetcher = () => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        const controller = new AbortController()
        const signal = controller.signal

        fetch('https://jsonplaceholder.typicode.com/posts', { signal })
            .then(response => {
                if (!response.ok) throw new Error('Network response was not ok');
                return response.json();
            })
            .then(data => setData(data))
            .catch(err => {
                if (err.name !== 'AbortError') setError(err.message);
            });

        return () => {
            controller.abort(); // Cleanup: Cancels fetch request on unmount
        };
    }, []);

    if (error) return <p>Error: {error}</p>;
    
    return <div>{data ? <p>{data[0].title}</p> : <p>Loading...</p>}</div>;
}