import { memo } from 'react';

export const Small = memo(({ counter }) => {

    console.log('Me volví a llamar :(');
    //si aqui hubiera un computo pesado, se volveria a llamar cada vez que se renderiza el componente
  return (
    <small>
        {counter}
    </small>
  )
})
