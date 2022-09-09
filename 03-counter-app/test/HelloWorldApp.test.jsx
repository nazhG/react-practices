import { render } from '@testing-library/react';
import HelloWorld from '../src/HelloWorldApp';

describe("componente react", () => {
  test("debe de mostrar un h1 con el texto hola mundo", () => {
    const { container } = render(<HelloWorld />);

    expect(container).toMatchSnapshot();
  });
});
