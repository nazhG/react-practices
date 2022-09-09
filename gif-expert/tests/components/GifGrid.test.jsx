import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');



describe('Pruebas GifGrid', () => { 

    const category = 'One Punch';
    
    test('debe de mostrar el componente correctamente', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            loading: false
        });

        render(<GifGrid category={category} />);
        expect(screen.getByText(category));
    })
    
    test('debe de mostrar items cuando se cargan imagenes useFetchGifs', () => {

        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/algo.jpg',
            title: 'Cualquier cosa'
        },
        {
            id: '123',
            url: 'https://localhost/algo.jpg',
            title: 'Cualquier cosa'
        }];

        useFetchGifs.mockReturnValue({
            images: gifs,
            loading: false
        });

        render(<GifGrid category={category} />);
        expect(screen.getAllByRole('img').length).toBe(gifs.length);

        render(<GifGrid category={category} />);
    })
    
})