import { useState, useEffect } from "react";
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsloading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const abortCoun = new AbortController();
    setTimeout(() => {
      fetch(url, { signal: abortCoun.signal })
        .then((data) => {
          if (!data.ok)
            throw Error("could not fetch the data for that resource");
          return data.json();
        })
        .then((data) => {
          setData(data);
          setIsloading(false);
          setError(null);
        })
        .catch((err) => {
          if (err.name === "AboutError") {
            console.log("fetch aborted");
          }
          {
            setIsloading(false);
            setError(err.message);
          }
        });
    }, 2000);
    return () => abortCoun.abort();
  }, []);
  return { data, isLoading, error };
};
export default useFetch;
