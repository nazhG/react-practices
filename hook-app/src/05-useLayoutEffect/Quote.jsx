import { useRef, useLayoutEffect, useState } from "react";

export const Quote = ({ quote, author }) => {

  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  // es mutable
  useLayoutEffect(() => {
    console.log(pRef.current.getBoundingClientRect());

    const { width, height } = pRef.current.getBoundingClientRect();
    setBoxSize({ width, height });
  }, [quote]);


  return (
    <blockquote className="blockquote text-end" style={{display :'flex'}}>
      <p ref={ pRef } className="mb-3">{quote}</p>
      <footer className="blockquote-footer">{author}</footer>

      <pre>
        { JSON.stringify(boxSize, null, 3) }
      </pre>
    </blockquote>
  );
};
