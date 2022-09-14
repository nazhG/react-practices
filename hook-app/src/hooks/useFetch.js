import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  const getFetch = async () => {

    setState({ data: null, loading: true, error: null });

    const resp = await fetch(url);
    const data = await resp.json();
    
    setState({
        loading: false,
        error: null,
        data
    });

  };

  useEffect(() => {
    getFetch();
  }, [url]);

  return {
    data: state.data,
    loading: state.loading,
    error: state.error,
  };
};
