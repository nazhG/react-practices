import React from "react";
import { useFetch, useCounter } from "../hooks/";
import { LoadingQuote, Quote } from "./";

export const MultipleHooks = () => {
  const { counter, increment } = useCounter(1);

  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { author, quote } = !!data && data[0];

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />
      {loading ? 
        <LoadingQuote /> :
        <Quote author={author} quote={quote} />
    }
      <button
        className="btn btn-primary"
        disabled={loading}
        onClick={() => increment()}
      >
        Siguiente quote
      </button>
    </>
  );
};
