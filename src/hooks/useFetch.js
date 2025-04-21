// src/hooks/useFetch.js
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Fetch failed.");
        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
// this is a custom hook that fetches data from a given URL and handles loading and error states. It can be used in any component to fetch data easily.
// It uses the `useEffect` hook to perform the fetch operation when the component mounts or when the URL changes. The fetched data, loading state, and error message are returned as an object.