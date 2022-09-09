import { render } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('GifItem', () => {

    const title = 'Un titulo';
    const url = 'https://localhost/algo.jpg';

    test('debe de hacer mach con el snapshot', () => {
        const { container } = render( <GifItem title={title} url={url} id="1" /> );
        expect(container).toMatchSnapshot();
    });
    
})