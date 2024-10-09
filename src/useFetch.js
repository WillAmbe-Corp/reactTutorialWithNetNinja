import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(res => {
                    if(!res.ok){
                        throw Error("data unreachable");
                    };
                   return res.json()})
                .then(data => setData(data))
                .catch(err => setError(err.message))
                setLoading(false);
            }, 1000)
    }, [url]);
    return {data, loading, error};
}
export default useFetch;