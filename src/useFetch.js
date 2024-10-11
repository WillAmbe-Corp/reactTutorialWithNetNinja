import { useState, useEffect } from "react";

const useFetch = url => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect( () => {
        const abortCon = new AbortController();
        setTimeout(() => {
            fetch(url, {signal: abortCon.signal} )
            .then(res => {
                if(!res.ok){
                    throw Error("data unreachable")
                }
                return res.json()})
            .then(data => {
                setData(data);
                setError(null);
            })
            .catch(err => {
                if(err.name === 'AbortError'){
                    console.log('fetch aborted')
                }else{
                    setError(err.message)
                }
            } );
            setLoading(false);
        }, 1000)

    }, [url])
    return {data, loading, error};
}
export default useFetch;