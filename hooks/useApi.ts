import { useEffect, useState } from "react";

export default function useApi<T>(url: string, options?: RequestInit) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);

  const abortController = new AbortController();

  const fetchData = async () => {
    const signal = abortController.signal;
    setLoading(true);
    try {
      const response = await fetch(url, { ...options, signal });
      //serializing func + and default is json 
      const responseData: T = await response.json();
      setData(responseData);
    } catch (error) {
      //move in enum
      if (error instanceof Error && error.name !== "AbortError") {
        setError(error as Error);
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
    return () => {
      abortController.abort();
    };
  }, []);

  return { data, loading, error };
}
